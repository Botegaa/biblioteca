document.addEventListener('DOMContentLoaded', function () {
  const generoSelect = document.querySelector('select[name="generos"]');
  generoSelect.addEventListener('change', function () {
    const generoSelecionado = generoSelect.value;
    const bookGridDiv = document.querySelector('.book-grid_div');
    bookGridDiv.innerHTML = '';

    if (generoSelecionado === 'Romance') {

      const livroClubeLivroHomens = {
        capa: 'images/capa10.jpg',
        titulo: 'O Clube do Livro dos Homens',
        autor: 'Lyssa Kay Adams',
        resumo: 'Uma jornada transformadora de homens através da leitura e amizade.'
      };

      const livroOsDoisMorremNoFinal = {
        capa: 'images/capa6.jpg',
        titulo: 'Os Dois Morrem no Final',
        autor: 'Adam Silvera',
        resumo: 'Segredos silenciados desencadeiam um suspense intenso em uma paciente enigmática'
      };

      const livroSeteMaridos = {
        capa: 'images/capa3.jpg',
        titulo: 'Os Sete Maridos de Evelyn Hugo',
        autor: 'Taylor Jenkins Reid',
        resumo: 'A lendária estrela Evelyn Hugo revela sua vida glamorosa e os segredos por trás de seus sete casamentos em uma história envolvente.'
      };

      const livroOrgulhoPreconceito = {
        capa: 'images/capa24.jpg',
        titulo: 'Orgulho e Preconceito',
        autor: 'Jane Austen',
        resumo: 'Um romance clássico que retrata as complexidades do amor e da sociedade, desafiando os preconceitos e orgulhos que separam os protagonistas.'
      };

      const livroImperfeitos = {
        capa: 'images/capa23.jpg',
        titulo: 'Imperfeitos',
        autor: 'Christina Lauren',
        resumo: 'Em um casamento desastroso, uma mulher e o irmão do noivo embarcam em uma lua de mel cheia de reviravoltas inesperadas.'
      };

      const livroFeriasComVoce = {
        capa: 'images/capa22.jpg',
        titulo: 'De Férias Com Você',
        autor: 'Emily Henry',
        resumo: 'Em uma viagem inesperada, dois estranhos descobrem um amor improvável e enfrentam os desafios do passado e do presente juntos.'
      };

      const livroVermelhoBranco = {
        capa: 'images/capa5.jpg',
        titulo: 'Vermelho, Branco e Sangue Azul',
        autor: 'Casey McQuiston',
        resumo: 'Em um romance cativante, um príncipe e um político rival se envolvem em um romance proibido que desafia as expectativas sociais.'
      };

      const livroPessoasNormais = {
        capa: 'images/capa9.jpg',
        titulo: 'Pessoas Normais',
        autor: 'Sally Rooney',
        resumo: 'Uma história cativante sobre as complexidades e relações de pessoas comuns.'
      };

      const livroTudoTodas = {
        capa: 'images/capa25.jpg',
        titulo: 'Tudo e Todas as Coisas',
        autor: 'Nicola Yoon',
        resumo: 'Uma história de amor proibido desafia todas as regras quando uma jovem descobre o mundo além de sua doença.'
      };

      adicionarLivro(bookGridDiv, livroClubeLivroHomens, true);
      adicionarLivro(bookGridDiv, livroOsDoisMorremNoFinal, true);
      adicionarLivro(bookGridDiv, livroSeteMaridos, true);
      adicionarLivro(bookGridDiv, livroOrgulhoPreconceito, true);
      adicionarLivro(bookGridDiv, livroImperfeitos, true);
      adicionarLivro(bookGridDiv, livroFeriasComVoce, true);
      adicionarLivro(bookGridDiv, livroVermelhoBranco, true);
      adicionarLivro(bookGridDiv, livroPessoasNormais, true);
      adicionarLivro(bookGridDiv, livroTudoTodas, true);


    } else if (generoSelecionado === 'Fantasia') {

      const livroPrincipeCruel = {
        capa: 'images/capa18.jpg',
        titulo: 'O Príncipe Cruel',
        autor: 'Holly Black',
        resumo: 'Uma história de fantasia repleta de intriga, traição e romance, ambientada em um mundo onde humanos e fadas estão em conflito.'
      };

      const livroCirce = {
        capa: 'images/capa19.jpg',
        titulo: 'Circe',
        autor: 'Madeline Miller',
        resumo: 'Uma releitura da mitologia grega centrada na história de Circe, uma feiticeira poderosa que enfrenta deuses e heróis em sua jornada de autodescoberta.'
      };

      const livroBibliotecaMeiaNoite = {
        capa: 'images/capa1.jpg',
        titulo: 'A Biblioteca da Meia-Noite',
        autor: 'Placeholder Author',
        resumo: 'Um segredo oculto nas sombras da meia-noite desperta mistérios e aventuras.'
      };

      const livroCidadeOssos = {
        capa: 'images/capa21.jpg',
        titulo: 'Cidade dos Ossos',
        autor: 'Cassandra Clare',
        resumo: 'Uma jovem caçadora de demônios mergulha em um submundo oculto para desvendar segredos sombrios na Cidade dos Ossos.'
      };

      const livroNomeVento = {
        capa: 'images/capa20.jpg',
        titulo: 'O Nome do Vento',
        autor: 'Patrick Rothfuss',
        resumo: 'As aventuras de Kvothe, um músico prodigioso em busca de respostas e vingança em um mundo repleto de magia e mistério.'
      };

      const livroPercyJackson = {
        capa: 'images/capa14.jpg',
        titulo: 'Percy Jackson e o Mar de Monstros',
        autor: 'Rick Riordan',
        resumo: 'Percy Jackson encara perigosas criaturas em sua busca pelo lendário Mar de Monstros.'
      };

      const livroHobbit = {
        capa: 'images/capa16.jpg',
        titulo: 'O Hobbit',
        autor: 'J.R.R. Tolkien',
        resumo: 'Uma jornada inesperada leva um hobbit a aventuras épicas e encontros com criaturas míticas.'
      };

      const livroAddieLaRue = {
        capa: 'images/capa8.jpg',
        titulo: 'A Vida Invisível de Addie LaRue',
        autor: 'V.E. Schwab',
        resumo: 'Addie Larue faz um pacto com o diabo e ganha a imortalidade, mas é condenada a ser esquecida por todos que conhece.'
      };

      adicionarLivro(bookGridDiv, livroPrincipeCruel, true);
      adicionarLivro(bookGridDiv, livroCirce, true);
      adicionarLivro(bookGridDiv, livroBibliotecaMeiaNoite, true);
      adicionarLivro(bookGridDiv, livroCidadeOssos, true);
      adicionarLivro(bookGridDiv, livroNomeVento, true);
      adicionarLivro(bookGridDiv, livroPercyJackson, true);
      adicionarLivro(bookGridDiv, livroHobbit, true);
      adicionarLivro(bookGridDiv, livroAddieLaRue, true);


    } else if (generoSelecionado === 'Terror') {


      const livroAmigoImaginario = {
        capa: 'images/capa12.jpg',
        titulo: 'Amigo Imaginário',
        autor: 'Stephen Chbosky',
        resumo: 'Uma criança cria um amigo imaginário que se revela assustadoramente real e envolve-os em perigosas aventuras.'
      };

      adicionarLivro(bookGridDiv, livroAmigoImaginario, true);

    } else if (generoSelecionado === 'Thriller') {

      const livroPacienteSilenciosa = {
        capa: 'images/capa2.jpg',
        titulo: 'A Paciente Silenciosa',
        autor: 'Alex Michaelides',
        resumo: 'Um suspense psicológico envolvente sobre uma mulher que se recusa a falar e o terapeuta determinado a descobrir a verdade por trás de seu silêncio.'
      };

      const livroManualAssassinato = {
        capa: 'images/capa7.jpg',
        titulo: 'Manual de Assassinato Para Boas Garotas',
        autor: 'Holly Jackson',
        resumo: 'Quatro amigas encaram uma reviravolta sinistra quando se envolvem em um manual de assassinato, levando-as a um perigoso jogo de segredos mortais.'
      };

      const livroHistoriaSecreta = {
        capa: 'images/capa26.jpg',
        titulo: 'A História Secreta',
        autor: 'Donna Tartt',
        resumo: 'Donna Tartt nos presenteia com uma história envolvente, onde segredos sombrios e tragédias permeiam a vida de um grupo de estudantes universitários.'
      };

      const livroDesconhecida = {
        capa: 'images/capa15.jpg',
        titulo: 'A Desconhecida',
        autor: 'Peter Swanson',
        resumo: 'Um encontro casual desencadeia uma perigosa obsessão com consequências imprevisíveis.'
      };

      const livroDaVinci = {
        capa: 'images/capa30.jpg',
        titulo: 'O Código Da Vinci',
        autor: 'Dan Brown',
        resumo: 'Uma busca por segredos ancestrais que pode abalar o mundo.'
      };

      const livroMusas = {
        capa: 'images/capa11.jpg',
        titulo: 'As Musas',
        autor: 'Alex Michaelides',
        resumo: 'Um terapeuta se envolve com uma paciente que é acusada de assassinar seu marido, desencadeando uma trama cheia de reviravoltas.'
      };

      adicionarLivro(bookGridDiv, livroPacienteSilenciosa, true);
      adicionarLivro(bookGridDiv, livroManualAssassinato, true);
      adicionarLivro(bookGridDiv, livroHistoriaSecreta, true);
      adicionarLivro(bookGridDiv, livroDesconhecida, true);
      adicionarLivro(bookGridDiv, livroDaVinci, true);
      adicionarLivro(bookGridDiv, livroMusas, true);

    } else if (generoSelecionado === 'Ficção Científica') {

      const livroEnigmaAndromeda = {
        capa: 'images/capa29.jpg',
        titulo: 'O Enigma de Andrômeda',
        autor: 'Placeholder Author',
        resumo: 'Uma ameaça extraterrestre coloca a humanidade à beira do colapso. Sobrevivência é a única opção.'
      };
      const livroForward = {
        capa: 'images/capa28.jpg',
        titulo: 'Forward',
        autor: 'Placeholder Autor',
        resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia magna in mattis egestas.'
      };

      const livroMateriaEscura = {
        capa: 'images/capa27.jpg',
        titulo: 'Matéria Escura',
        autor: 'Blake Crouch',
        resumo: 'Em uma realidade alternativa, um cientista luta para encontrar sua família.'
      };

      const livroCantigaPassarosSerpentes = {
        capa: 'images/capa13.jpg',
        titulo: 'A Cantiga dos Pássaros e das Serpentes',
        autor: 'Suzanne Collins',
        resumo: 'Um prelúdio da aclamada série "Jogos Vorazes", que mergulha na juventude do presidente Snow e nos eventos que moldaram Panem.'
      };

      const livroRecursao = {
        capa: 'images/capa17.jpg',
        titulo: 'Recursão',
        autor: 'Blake Crouch',
        resumo: 'Realidade e memória se fundem em um loop infinito, desafiando a sanidade humana.'
      };

      const livroDevoradores = {
        capa: 'images/capa4.jpg',
        titulo: 'Devoradores de Estrelas',
        autor: 'Andy Weir',
        resumo: 'Uma ameaça cósmica consome estrelas, desencadeando uma corrida desesperada pela sobrevivência.'
      };

      adicionarLivro(bookGridDiv, livroEnigmaAndromeda, true);
      adicionarLivro(bookGridDiv, livroForward, true);
      adicionarLivro(bookGridDiv, livroMateriaEscura, true);
      adicionarLivro(bookGridDiv, livroCantigaPassarosSerpentes, true);
      adicionarLivro(bookGridDiv, livroRecursao, true);
      adicionarLivro(bookGridDiv, livroDevoradores, true);

    }
  });
});


function adicionarLivro(bookGridDiv, livro, adicionarBotao = false) {
  const divLivro = document.createElement('div');
  divLivro.classList.add('book-card_div');

  const imgCapa = document.createElement('img');
  imgCapa.src = livro.capa;
  imgCapa.classList.add('book-cover_img');
  divLivro.appendChild(imgCapa);

  const divDadosLivro = document.createElement('div');
  divDadosLivro.classList.add('book-data_div');

  const spanTitulo = document.createElement('span');
  spanTitulo.classList.add('book-title');
  spanTitulo.textContent = livro.titulo;
  divDadosLivro.appendChild(spanTitulo);

  const spanAutor = document.createElement('span');
  spanAutor.classList.add('book-author');
  spanAutor.textContent = livro.autor;
  divDadosLivro.appendChild(spanAutor);

  const spanResumo = document.createElement('span');
  spanResumo.classList.add('book-summary');
  spanResumo.textContent = livro.resumo;
  divDadosLivro.appendChild(spanResumo);

  if (adicionarBotao) {
    const divBotaoContainer = document.createElement('div');
    divBotaoContainer.classList.add('button-container_div');

    const botaoAdquirir = document.createElement('button');
    botaoAdquirir.classList.add('borrow_button', 'adquirir_button'); // Adiciona as classes 'borrow_button' e 'adquirir_button' ao botão
    botaoAdquirir.textContent = 'Adquirir';
    divBotaoContainer.appendChild(botaoAdquirir);

    divDadosLivro.appendChild(divBotaoContainer);
  }

  divLivro.appendChild(divDadosLivro);
  bookGridDiv.appendChild(divLivro);
}
