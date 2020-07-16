import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { ContactService } from '../../services/contact-service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ ContactService ]
})
export class HomeComponent implements OnInit {
  public slideItems: any
  public messageResponse: any
  public formAtribute: FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required]),
    'lastName': new FormControl(null, [Validators.required]),
    'companyName': new FormControl(null, [Validators.required]),
    'mail': new FormControl(null, [Validators.required]),
    'cellphone': new FormControl(null, [Validators.required]),
    'message': new FormControl(null, [Validators.required])
  })

  public items = [
    { url: '../../../assets/bullseye-arrow.svg', title: 'Gerenciamento de Metas', text:'A chave para o crescimento das vendas começa com uma estratégia bem desenvolvida junto aos parceiros, com objetivos claros e bem definidos de vendas, personalizados para cada um.' },
    { url: '../../../assets/chart-bar.svg', title: 'Faturamentos & KPIs', text:'Municie sua equipe e seus clientes com informações atualizadas diariamente para acompanhamento do faturamento, KPIs e informações gerenciais por período, segmento, linha de produtos.' },
    { url: '../../../assets/file-signature.svg', title: 'Acordos Comerciais', text:'Fortaleça o relacionamento com seus parceiros de negócio formalizando os objetivos a serem atingidos e os benefícios para recompensá-los.' },
    { url: '../../../assets/usd-circle.svg', title: 'Controle de Verba', text:'Gerencie as verbas de marketing para garantir que sejam aplicadas na realização de ações promocionais bem sucedidas.' },
    { url: '../../../assets/hands-usd.svg', title: 'Gestão de Bonificação', text:'Bonifique os parceiros comprometidos com os objetivos da corporação e que estejam trazendo bons resultados.' },
    { url: '../../../assets/badge-percent.svg', title: 'Ações Promocionais', text:'Crie e acompanhe ações promocionais com o auxílio de ferramentas intuitivas que permitem os usuários alocarem gastos previamente aprovados, garantindo uma execução precisa e consistente.' }
  ]

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.slideItems = [
      { src: '../../../assets/Logo.SW.svg', title: 'Title 1' },
      { src: '../../../assets/Logo.Kimberly.svg', title: 'Title 2' },
      { src: '../../../assets/Logo.Astellas.svg', title: 'Title 3' },
      { src: '../../../assets/Logo.Vivid.png', title: 'Title 4' },
      { src: '../../../assets/Logo.Schneider.svg', title: 'Title 5' }
    ];
  }

  sendForm():void {
    if(this.formAtribute.status === 'VALID') {
      let formularioData = {
        'name': this.formAtribute.value.name,
        'lastName': this.formAtribute.value.lastName,
        'companyName': this.formAtribute.value.companyName,
        'email': this.formAtribute.value.mail,
        'phone': this.formAtribute.value.phone,
        'message': this.formAtribute.value.message
      }

      this.contactService.sendContact(formularioData).subscribe(
        (response: any) => {
          console.log(response)
          this.messageResponse = {
            key: 200,
            value: 'Sua mensagem foi enviada com sucesso!'
          }

          this.clearForm()
        },
        (error) => {
          this.messageResponse = {
            key: 500,
            value: 'Ops! Ocorreu um erro no envio da sua mensagem.'
          }

          this.clearForm()
        })
    } else {
      this.formAtribute.markAllAsTouched
    }
  }

  clearForm(): void {
    const _self=  this

    setTimeout(function(){ 
      _self.messageResponse = null
    }, 5000);

    this.formAtribute = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, [Validators.required]),
      'companyName': new FormControl(null, [Validators.required]),
      'mail': new FormControl(null, [Validators.required]),
      'cellphone': new FormControl(null, [Validators.required]),
      'message': new FormControl(null, [Validators.required])
    })
  }
}
