
function generateVCard() {
  const hubUrl = "https://hub-hub-oscar-labcheap.npfusf.easypanel.host/";
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:${'Oscar Nieves'};;;;
FN:${'Oscar Nieves'}
ORG:LabCheap
TITLE:${'Servicio Técnico'}
TEL;TYPE=WORK,VOICE:${'619558266'}
TEL;TYPE=CELL,VOICE:${'619558266'}
EMAIL;TYPE=WORK,INTERNET:${'sat@labcheap.es'}
URL:https://www.labcheap.es
URL;TYPE=HUB:${hubUrl}
ADR;TYPE=WORK:;;Calle Zoología, 48, esquina con Calle Sociología, Parque Empresarial Nuevo Torneo;Sevilla;;41015;España
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Oscar_Nieves_LabCheap.vcf');
  document.body.appendChild(link);
  link.click();
  
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
