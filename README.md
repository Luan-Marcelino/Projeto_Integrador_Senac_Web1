# Projeto_Integrador_Senac_Web1

## Landing Page - Escritório de Advocacia

:busts_in_silhouette:**INTEGRANTES** <br/>
- `Gladson Vinícios`<br/>
- `Tatiana Hollanda`<br/>
- `Nickson Kleyton`<br/>
- `Paulo Victor`<br/>
- `Gabriel Carvalho`<br/>
- `Luan Augusto`<br/>
- `Ana Diva`<br/><br/>

:memo:**DESCRIÇÃO DA PROPOSTA** <br/>
&emsp;Muitas pessoas enfrentam **dúvidas sobre seus direitos trabalhistas**, mas não sabem exatamanete quando procurar um advogado ou quais medidas podem tomar. Além disso, há uma **dificuldade de acesso a informações jurídicas claras e confiáveis**, pois o conteúdo disponível muitas vezes utiliza linguagem técnica ou não oferece uma forma simples de contato com um profissional. <br/>
&emsp;Dessa forma, identifica-se a necessidade de uma **plataforma digital que apresente informações acessíveis e permita um contato rápido com um advogado especializado**.
<br/>
<br/>
:dart:**PÚBLICO-ALVO** <br/>
&emsp;O público alvo da landing page é composto por **pessoas que necessitam de orientação jurídica**, especialmente nas áreas de **direito trabalhista**, como trabalhadores que enfrentam problemas relacionados ao vínculo empregatício, rescisão de contrato, horas extras não pagas, assédio no ambiente de trabalho ou demissão sem o pagamento correto dos direitos. <br/><br/>
&emsp;Esse público geralmente apresenta as seguintes características: 
* **Faixa etária:** Entre 25 e 60 anos.
* **Perfil:** Trabalhadores formais ou informais que buscam esclarecimento sobre seus direitos.
* **Comportamento digital:** Utilizam a internet e mecanismos de busca para encontrar informações jurídicas e profissionais especializados.
* **Necessidade principal:** Compreender seus direitos e obter orientação jurídica confiável. 
<br/>

:computer:**API ESCOLHIDA** <br/>
&emsp;A API escolhida foi a **DataJud**, uma ferramenta que permite o acesso público aos metadados de processos judiciais de todo o Brasil. Os dados disponibilizados pela API são originários da **Base Nacional de Dados do Poder Judiciário** e seguem os critérios estabelecidos pela Portaria Nº 160 de 09/09/2020 bem como o resguardo de processos sigilosos e dados de partes.<br/><br/>
&emsp;As informações principais que o projeto consumirá (via objeto JSON) são: <br/>
* **Número do Processo**: O padrão CNPJ, com 7 dígitos e digito verificador, ano, tribunal e unidade.
* **Classe Processual**: O tipo de ação, por exemplo: Procedimento comum e Execução de título.
* **Órgão Julgador**: Qual vara ou tribunal está cuidando do caso.
* **Data da Última Atualização**: Quando houver o útimo movimento do processo.
* **Movimentações**: O histórico de "andamentos" do processo, por exemplo: Concluso para despacho e Sentença proferida. <br/> <br/>
&emsp;O flúxo dos dados que serão exibidos na página: <br/> <br/>
* **Requisição por Chave**: O usuário digita o número do processo em um campo de busca.
* **Tratamento de Dados**: O JavaScript filtra os códigos numéricos que o CNJ envia e os transforma em nome amigáveis, por exemplo: Transformar o código da classe 11 em "Procedimento Comum".
* **Renderização em Cards ou Tabelas**:
  * **Cabeçalho**:Exibição em destaque do número do processo e status atual.
  * **Timeline**: As movimentações serão exibidas em uma lista vertical, da mais recente para a mais antiga, facilitando a leitura do histórico judicial.
<br/>

:date:**PLANEJAMENTO DAS TAREFAS** <br/>
&emsp;O desenvolvimento da Landing Page, voltada para a área da advocacia trabalhista, será realizado ao longo de quatro semanas. Com divisão de tarefas entre os seis integrantes da equipe, visando garantir organização, qualidade e cumprimento dos prazos estabelecidos.
<br/>
<br/>
&emsp;A equipe foi organizada de forma estratégica, considerando diferentes responsabilidades dentro do projeto:
<br/>
* **`Gladson` e `Ana`:** Responsáveis pela criação do repositório no GitHub e pela elaboração do wireframe da página, definindo a estrutura visual inicial da Landing Page, assim como a criação e públicação do site.<br/>
* **`Tatiana`:** Responsável pela organização do projeto, incluindo a distribuição das funções entre os integrantes, definição da proposta do projeto, identificação do público-alvo e levantamento das necessidades a serem atendidas pela aplicação.<br/>
* **`Nickson`, `Paulo` e `Gabriel`:** Responsáveis pela escolha da API pública a ser utilizada, bem como pela configuração inicial e testes de integração com a aplicação.<br/>
* **`Luan`:** Responsável por apoiar na elaboração do wireframe e na elaboração e documentação do README do projeto.<br/><br/>
**Lading Page:** https://queroadv.netlify.app/
## Estrutura prevista da Landing Page:
Página Inicial do site:
![Imagem da tela de início.](/assets/pg1.png)<br/><br/>
Página explicando sobre a empresa:
![Imagem da tela de sobre.](/assets/pg2.png)<br/><br/>
Página sobre a atuação da empresa:
![Imagem da tela de atuação.](/assets/pg3.png)
