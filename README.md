# Instrução de Instalação

A instalação pode ser feita através do npm, vai ser através dele que explicarei a execução do projeto.
Acesse a pasta do projeto, e em seguida acesse a pasta backend, logo após digite o comando sudo npm i, para fazer a instalação das funções e bibliotecas usadas no projeto, faça o mesmo na pasta frontend.
Abra 3 prompts.
Com o primeiro prompt, execute o mongodb, através do comando sudo mongod.
O segundo prompt, acesse a pasta backend, e execute o npm start.
No terceiro, acesse a pasta de frontend, e rode o comando npm run serve.
Com os três pormpts em execução, agora é só abrir o browser e digitar no navegador o endereço http://localhost:8080/

# Instrução de uso

A primeira tela que temos é a do cadastro de Pessoas (ou usuários).
Nessa tela, é possível informar o nome, telefone e CPF. Os campos estão com as máscaras, o tamanho máximo é 14 (contando com os caracteres das máscaras) e também se fará a validação dos campos. A adição dos cursos não foi possível, devido a um erro ainda não solucionado com a tabela extra que faria a relação n:n.
Na próxima tela teremos a listagem de todos os usuários, onde também é possível editar e excluí-los. A aba ao lado tem todos os cursos que foram adicionados ao banco de dados. Com relação a isso, há o script "insertCourses.sql" no projeto, contendo o insert condicional de vários cursos. Para executá-lo, e fazer a carga, é necessário rodar os comandos:
psql -U postgres;
\c knowledge_final;
\i insertCourses.sql;
Alterando o arquivo insertCourses, é necessário rodar novamente os comandos e recarregar a página.
