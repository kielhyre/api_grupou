# api_grupou
AV2 - DESENVOLVIMENTO DE APLICAÇÕES DISTRIBUÍDAS - 2020/2

Controller desenvolvido com os 5 métodos: <b>professor.controller.js</b><br>
URL para consumo dos recursos:
- Index: http://localhost:3000/api/professor/
- Show: http://localhost:3000/api/professor/ID
- Store: http://localhost:3000/api/professor/
- Update: http://localhost:3000/api/professor/ID
- Destroy: http://localhost:3000/api/professor/ID

Obs: Método Store pode fazer a inclusão de turma e disciplina na entidade professor.

Controllers extras desenvolvidos para melhor gestão da entidade professor:<br>
<b>professor.disciplina.js</b><br>
- Store: http://localhost:3000/api/professor_disciplina/ID
- Destroy: http://localhost:3000/api/professor_disciplina/ID

<b>professor.turma.js</b><br>
- Store: http://localhost:3000/api/professor_turma/ID
- Destroy: http://localhost:3000/api/professor_turma/ID

