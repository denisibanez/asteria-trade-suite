import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items = [
    { url: '../../../assets/bullseye-arrow.svg', title: 'Gerenciamento de Metas', text:'A chave para o crescimento das vendas começa com uma estratégia bem desenvolvida junto aos parceiros, com objetivos claros e bem definidos de vendas, personalizados para cada um.' },
    { url: '../../../assets/chart-bar.svg', title: 'Faturamentos & KPIs', text:'Municie sua equipe e seus clientes com informações atualizadas diariamente para acompanhamento do faturamento, KPIs e informações gerenciais por período, segmento, linha de produtos.' },
    { url: '../../../assets/file-signature.svg', title: 'Acordos Comerciais', text:'Fortaleça o relacionamento com seus parceiros de negócio formalizando os objetivos a serem atingidos e os benefícios para recompensá-los.' },
    { url: '../../../assets/usd-circle.svg', title: 'Controle de Verba', text:'Gerencie as verbas de marketing para garantir que sejam aplicadas na realização de ações promocionais bem sucedidas.' },
    { url: '../../../assets/hands-usd.svg', title: 'Gestão de Bonificação', text:'Bonifique os parceiros comprometidos com os objetivos da corporação e que estejam trazendo bons resultados.' },
    { url: '../../../assets/badge-percent.svg', title: 'Ações Promocionais', text:'Crie e acompanhe ações promocionais com o auxílio de ferramentas intuitivas que permitem os usuários alocarem gastos previamente aprovados, garantindo uma execução precisa e consistente.' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
