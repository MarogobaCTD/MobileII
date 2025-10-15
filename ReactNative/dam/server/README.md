# ROTAS E RESOURCES

## Exemplos
- http://localhost:3333/coaches
- http://localhost:3333/contacts

# Métodos HTTP
- GET: Buscar ou listar uma informação
- POST: Criar alguma nova informação
- PUT: Atualizar uma informação existente 
- DELETE: Deletar uma informação existente

- Corpo (Resquest: Body): Dados para criação ou atualização de um registro
- Route Params: Idenfiticar qual recurso quero atualizar ou deletar
- Query Params: Paginação, filtros, ordenação

# Exemplos
app.get('/coaches', (request, response) => {
  const coaches = [
    {name: 'Flavio', age:51},
    {name: 'Bruce Lee', age:51},
  ]

  return response.json(coaches)
});

app.post('/coaches', (request, response) => {
  console.log(request.body);  
  const coaches = [
    {name: 'Flavio', age:51},
    {name: 'Bruce Lee', age:51},
  ]

  return response.json(coaches)
});

app.delete('/coaches/:id', (request, response) => {
  console.log(request.params);  
  const coaches = [
    {name: 'Flavio', age:51},
    {name: 'Bruce Lee', age:51},
  ]

  return response.json(coaches)
});

app.get('/', (request, response) => {  
  return response.json({message: 'Hello World!'})
});

# Funcionalidades (Casos de Uso)


## Conexões

- Rota para listar o total de conexões realizadas;
- Rota para criar uma nova conexão;

## Aulas

- Rota para criar uma aula;
- Rota para listar aulas;
  - Filtrar por matéria, dia da semana e horário;