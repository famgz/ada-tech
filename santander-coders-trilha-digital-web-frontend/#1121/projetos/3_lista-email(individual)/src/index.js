import { defaultEmailBody, defaultEmailTitle } from './emailDefaultContent.js';
import { emailList } from './emailList.js';
import sendEmail from './envia-email.js';

const weekdays = {
  0: 'Domingo',
  1: 'Segunda-feira',
  2: 'Terça-feira',
  3: 'Quarta-feira',
  4: 'Quinta-feira',
  5: 'Sexta-feira',
  6: 'Sábado',
};

const TARGET_WEEKDAY_CODE = 1; // segunda-feira
const targetWeekday = weekdays[TARGET_WEEKDAY_CODE];

if (!targetWeekday) {
  throw TypeError(
    `Erro: Código do dia semana inválido: ${TARGET_WEEKDAY_CODE} !
    O valor deve ser um número entre 0 e 6`
  );
}

function getEmailBody(clientName) {
  return `
Olá ${clientName},

${defaultEmailBody}`;
}

function getCurrentWeekdayCode() {
  const date = new Date();
  return date.getDay();
}

// TODO: implementar laço eterno que irá aguardar até chegar o dia da semana
function main() {
  const currentWeekdayCode = getCurrentWeekdayCode();
  const currentWeekday = weekdays[currentWeekdayCode];

  const isTargetWeekday = currentWeekdayCode === TARGET_WEEKDAY_CODE;

  if (!isTargetWeekday) {
    console.log(
      `Hoje ainda é ${currentWeekday}.\n\nAguarde até ${targetWeekday} e tente novamente.`
    );
    return;
  }

  const reportStatus = [];
  emailList.forEach(({ name, email, sendMarketing }) => {
    if (!sendMarketing) {
      reportStatus.push({
        'NOME CLIENTE': name,
        'EMAIL CLIENTE': email,
        STATUS: 'NÃO INSCRITO',
        OBS: 'Cliente não deseja receber emails',
      });
      return;
    }
    const emailBody = getEmailBody(name);
    const res = sendEmail(email, defaultEmailTitle, emailBody);
    reportStatus.push({
      'NOME CLIENTE': name,
      'EMAIL CLIENTE': email,
      STATUS: res.status === 'Error' ? 'ERRO!' : 'SUCESSO!',
      OBS: res.message,
    });
  });

  console.table(reportStatus);
}

main();
