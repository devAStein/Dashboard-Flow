
const DATA = {
  "project": "Flow",
  "statusDate": "13/06/2026",
  "deadline": "30/06/2026",
  "overallProgress": 42,
  "plannedProgress": 52,
  "deviation": -10,
  "statusLabel": "Em atraso / Atenção crítica",
  "statusTone": "warning",
  "baseCost": 104524.57,
  "revisedCost": 115945.80,
  "costDelta": 11421.23,
  "costDeltaPct": 10.93,
  "contingencyReserve": 5521.23,
  "totalTasks": 14,
  "doneTasks": 6,
  "inProgressTasks": 4,
  "pendingTasks": 5,
  "overdueTasks": [
    "1.3.2",
    "1.3.3"
  ],
  "remainingDays": 17,
  "tasks": [
    {
      "id": "1.1.1",
      "level": 3,
      "name": "1.1.2 Termo de abertura do projeto",
      "progress": 100,
      "start": "09/03/2026",
      "due": "13/03/2026",
      "startISO": "2026-03-09",
      "dueISO": "2026-03-13",
      "owner": "Matheus Lucas",
      "completion": "10/06/2026",
      "completionISO": "2026-06-10",
      "hours": "8",
      "duration": "5",
      "group": "Marco 1 - Inicializa"
    },
    {
      "id": "1.1.2",
      "level": 3,
      "name": "1.1.3 Analise de viabilidade",
      "progress": 100,
      "start": "16/03/2026",
      "due": "20/03/2026",
      "startISO": "2026-03-16",
      "dueISO": "2026-03-20",
      "owner": "Matheus Lucas",
      "completion": "10/06/2026",
      "completionISO": "2026-06-10",
      "hours": "8",
      "duration": "5",
      "group": "Marco 1 - Inicializa"
    },
    {
      "id": "1.2.1",
      "level": 3,
      "name": "1.2.1.1 Instalação e teste do servidor",
      "progress": 100,
      "start": "29/05/2026",
      "due": "31/05/2026",
      "startISO": "2026-05-29",
      "dueISO": "2026-05-31",
      "owner": "Claude.IA, Armando, Matheus Pereira",
      "completion": "10/06/2026",
      "completionISO": "2026-06-10",
      "hours": "16.5",
      "duration": "3",
      "group": "Marco 2 - Hardware-cotação e intalação"
    },
    {
      "id": "1.2.2",
      "level": 3,
      "name": "1.2.2.1 Instalação e teste de dispositivos IoT",
      "progress": 100,
      "start": "01/06/2026",
      "due": "02/06/2026",
      "startISO": "2026-06-01",
      "dueISO": "2026-06-02",
      "owner": "Alysson",
      "completion": "10/06/2026",
      "completionISO": "2026-06-10",
      "hours": "8",
      "duration": "2",
      "group": "Marco 2 - Hardware-cotação e intalação"
    },
    {
      "id": "1.3.1",
      "level": 3,
      "name": "1.3.1.1 Configuração do dispositivo IoT",
      "progress": 100,
      "start": "02/06/2026",
      "due": "04/06/2026",
      "startISO": "2026-06-02",
      "dueISO": "2026-06-04",
      "owner": "Alysson",
      "completion": "10/06/2026",
      "completionISO": "2026-06-10",
      "hours": "8",
      "duration": "3",
      "group": "Marco 3 - Desenvolvimento"
    },
    {
      "id": "1.3.2",
      "level": 3,
      "name": "1.3.2.1 Modelagem de dados",
      "progress": 70,
      "start": "04/06/2026",
      "due": "07/06/2026",
      "startISO": "2026-06-04",
      "dueISO": "2026-06-07",
      "owner": "Substituto pendente",
      "completion": "-",
      "completionISO": null,
      "hours": "3",
      "duration": "4",
      "group": "Marco 3 - Desenvolvimento"
    },
    {
      "id": "1.3.3",
      "level": 3,
      "name": "1.3.2.2 Configuração do Banco de dados",
      "progress": 70,
      "start": "08/06/2026",
      "due": "10/06/2026",
      "startISO": "2026-06-08",
      "dueISO": "2026-06-10",
      "owner": "Substituto pendente",
      "completion": "-",
      "completionISO": null,
      "hours": "3",
      "duration": "3",
      "group": "Marco 3 - Desenvolvimento"
    },
    {
      "id": "1.3.4",
      "level": 3,
      "name": "1.3.3.1 Design da interface",
      "progress": 100,
      "start": "09/06/2026",
      "due": "10/06/2026",
      "startISO": "2026-06-09",
      "dueISO": "2026-06-10",
      "owner": "Matheus Pereira",
      "completion": "11/06/2026",
      "completionISO": "2026-06-11",
      "hours": "8",
      "duration": "2",
      "group": "Marco 3 - Desenvolvimento"
    },
    {
      "id": "1.3.5",
      "level": 3,
      "name": "1.3.3.2 Desenvolvimento da interface",
      "progress": 40,
      "start": "13/06/2026",
      "due": "20/06/2026",
      "startISO": "2026-06-13",
      "dueISO": "2026-06-20",
      "owner": "Matheus Pereira",
      "completion": "-",
      "completionISO": null,
      "hours": "8",
      "duration": "8",
      "group": "Marco 3 - Desenvolvimento"
    },
    {
      "id": "1.3.6",
      "level": 3,
      "name": "1.3.3.3 Protótipo da interface",
      "progress": 0,
      "start": "20/06/2026",
      "due": "24/06/2026",
      "startISO": "2026-06-20",
      "dueISO": "2026-06-24",
      "owner": "Matheus Pereira",
      "completion": "-",
      "completionISO": null,
      "hours": "8",
      "duration": "5",
      "group": "Marco 3 - Desenvolvimento"
    },
    {
      "id": "1.5.1",
      "level": 3,
      "name": "1.4.1.1 Preparação de materiais de treinamento",
      "progress": 0,
      "start": "21/06/2026",
      "due": "24/06/2026",
      "startISO": "2026-06-21",
      "dueISO": "2026-06-24",
      "owner": "Matheus Lucas",
      "completion": "-",
      "completionISO": null,
      "hours": "8",
      "duration": "4",
      "group": "Marco 4 - Implementação"
    },
    {
      "id": "1.5.2",
      "level": 3,
      "name": "1.4.2.1 Migração de dados",
      "progress": 0,
      "start": "24/06/2026",
      "due": "27/06/2026",
      "startISO": "2026-06-24",
      "dueISO": "2026-06-27",
      "owner": "Claude.IA, Matheus Lucas",
      "completion": "-",
      "completionISO": null,
      "hours": "3",
      "duration": "4",
      "group": "Marco 4 - Implementação"
    },
    {
      "id": "1.5.3",
      "level": 3,
      "name": "1.4.1.2 sessões de treinamento",
      "progress": 0,
      "start": "26/06/2026",
      "due": "27/06/2026",
      "startISO": "2026-06-26",
      "dueISO": "2026-06-27",
      "owner": "Matheus Lucas",
      "completion": "-",
      "completionISO": null,
      "hours": "8",
      "duration": "2",
      "group": "Marco 4 - Implementação"
    },
    {
      "id": "1.5.4",
      "level": 3,
      "name": "1.4.2.2 Testes finais",
      "progress": 0,
      "start": "27/06/2026",
      "due": "30/06/2026",
      "startISO": "2026-06-27",
      "dueISO": "2026-06-30",
      "owner": "Armando",
      "completion": "-",
      "completionISO": null,
      "hours": "8",
      "duration": "4",
      "group": "Marco 4 - Implementação"
    }
  ],
  "milestones": [
    {
      "id": "1.1",
      "level": 2,
      "name": "Marco 1 - Inicializa",
      "progress": 100,
      "start": "09/03/2026",
      "due": "20/03/2026",
      "startISO": "2026-03-09",
      "dueISO": "2026-03-20",
      "owner": "Matheus Lucas",
      "completion": "10/06/2026",
      "completionISO": "2026-06-10",
      "hours": "16",
      "duration": "12",
      "group": "Marco 1 - Inicializa",
      "type": "Marco",
      "tasksTotal": 2,
      "tasksDone": 2
    },
    {
      "id": "1.2",
      "level": 2,
      "name": "Marco 2 - Hardware-cotação e intalação",
      "progress": 100,
      "start": "29/05/2026",
      "due": "02/06/2026",
      "startISO": "2026-05-29",
      "dueISO": "2026-06-02",
      "owner": "Matheus Lucas",
      "completion": "10/06/2026",
      "completionISO": "2026-06-10",
      "hours": "24.5",
      "duration": "5",
      "group": "Marco 2 - Hardware-cotação e intalação",
      "type": "Marco",
      "tasksTotal": 2,
      "tasksDone": 2
    },
    {
      "id": "1.3",
      "level": 2,
      "name": "Marco 3 - Desenvolvimento",
      "progress": 58,
      "start": "02/06/2026",
      "due": "24/06/2026",
      "startISO": "2026-06-02",
      "dueISO": "2026-06-24",
      "owner": "Matheus Lucas",
      "completion": "-",
      "completionISO": null,
      "hours": "38",
      "duration": "23",
      "group": "Marco 3 - Desenvolvimento",
      "type": "Marco",
      "tasksTotal": 6,
      "tasksDone": 2
    },
    {
      "id": "1.4",
      "level": 2,
      "name": "MUD-01 - Aprovação da mudança e contratação da nova ferramenta paga",
      "progress": 30,
      "start": "10/06/2026",
      "due": "13/06/2026",
      "startISO": "2026-06-10",
      "dueISO": "2026-06-13",
      "owner": "Matheus Lucas",
      "completion": "-",
      "completionISO": null,
      "hours": null,
      "duration": "4",
      "group": "MUD-01 - Aprovação da mudança e contratação da nova ferramenta paga",
      "type": "Mudança",
      "tasksTotal": 0,
      "tasksDone": 0
    },
    {
      "id": "1.5",
      "level": 2,
      "name": "Marco 4 - Implementação",
      "progress": 0,
      "start": "21/06/2026",
      "due": "30/06/2026",
      "startISO": "2026-06-21",
      "dueISO": "2026-06-30",
      "owner": "Matheus Lucas",
      "completion": "-",
      "completionISO": null,
      "hours": "27",
      "duration": "10",
      "group": "Marco 4 - Implementação",
      "type": "Marco",
      "tasksTotal": 4,
      "tasksDone": 0
    }
  ],
  "risks": [
    {
      "code": "R09",
      "risk": "Atraso do projeto em relação ao planejado: 42% realizado contra 52% previsto",
      "prob": "Alta",
      "impact": "Alto",
      "severity": 16,
      "category": "Cronograma",
      "response": "Mitigar com acompanhamento diário, priorização de entregas críticas e replanejamento das atividades finais dentro do prazo oficial.",
      "owner": "Gerente do Projeto"
    },
    {
      "code": "R10",
      "risk": "Redução da capacidade técnica pela saída de um desenvolvedor",
      "prob": "Alta",
      "impact": "Alto",
      "severity": 16,
      "category": "Recursos",
      "response": "Redistribuir atividades, formalizar substituto/responsável e revisar tarefas de interface, banco e integração.",
      "owner": "Gerente do Projeto / Equipe Técnica"
    },
    {
      "code": "R11",
      "risk": "Ferramenta gratuita prevista no plano de aquisições não atender mais ao projeto",
      "prob": "Alta",
      "impact": "Médio",
      "severity": 12,
      "category": "Aquisições",
      "response": "Conduzir cotação, homologação e aprovação rápida de solução paga substituta, com registro formal da mudança.",
      "owner": "Gerente do Projeto / TI"
    },
    {
      "code": "R12",
      "risk": "Aumento de custo pela contratação de solução paga e esforço adicional de recuperação",
      "prob": "Média",
      "impact": "Alto",
      "severity": 12,
      "category": "Custos",
      "response": "Atualizar baseline de custos, aprovar variação com patrocinador, controlar a reserva de contingência e monitorar custo revisado no status report.",
      "owner": "Gerente do Projeto"
    },
    {
      "code": "R13",
      "risk": "Acúmulo de atividades finais pode comprometer testes, treinamento e homologação",
      "prob": "Média",
      "impact": "Alto",
      "severity": 12,
      "category": "Qualidade/Prazo",
      "response": "Executar atividades em paralelo quando viável, reforçar testes finais e acompanhar impedimentos até o encerramento.",
      "owner": "Gerente do Projeto / Qualidade"
    }
  ],
  "actions": [
    {
      "title": "Executar plano de recuperação do cronograma",
      "text": "O projeto está 10 pontos percentuais abaixo do planejado. As atividades finais devem ser acompanhadas diariamente para manter o prazo oficial de 30/06/2026."
    },
    {
      "title": "Redistribuir atividades do desenvolvedor desligado",
      "text": "As tarefas de modelagem, configuração, interface e protótipo devem ter responsável confirmado, com apoio da equipe remanescente e validação do gerente do projeto."
    },
    {
      "title": "Formalizar aquisição da ferramenta substituta",
      "text": "A ferramenta gratuita deixou de atender às necessidades do projeto. A aquisição de solução paga deve ser cotada, aprovada e registrada no plano de aquisições."
    },
    {
      "title": "Atualizar e controlar o custo revisado",
      "text": "O custo-base de R$ 104.524,57 foi revisado para R$ 115.945,80, gerando variação de R$ 11.421,23, equivalente a 10,93%, já incluindo reserva de contingência de R$ 5.521,23."
    },
    {
      "title": "Proteger testes, treinamento e implantação",
      "text": "Como as entregas finais ficaram comprimidas, testes finais, migração e treinamento devem ser tratados como atividades críticas de controle."
    }
  ],
  "nextTasks": [
    {
      "id": "1.3.2",
      "level": 3,
      "name": "1.3.2.1 Modelagem de dados",
      "progress": 70,
      "start": "04/06/2026",
      "due": "07/06/2026",
      "startISO": "2026-06-04",
      "dueISO": "2026-06-07",
      "owner": "Substituto pendente",
      "completion": "-",
      "completionISO": null,
      "hours": "3",
      "duration": "4",
      "group": "Marco 3 - Desenvolvimento"
    },
    {
      "id": "1.3.3",
      "level": 3,
      "name": "1.3.2.2 Configuração do Banco de dados",
      "progress": 70,
      "start": "08/06/2026",
      "due": "10/06/2026",
      "startISO": "2026-06-08",
      "dueISO": "2026-06-10",
      "owner": "Substituto pendente",
      "completion": "-",
      "completionISO": null,
      "hours": "3",
      "duration": "3",
      "group": "Marco 3 - Desenvolvimento"
    },
    {
      "id": "1.3.5",
      "level": 3,
      "name": "1.3.3.2 Desenvolvimento da interface",
      "progress": 40,
      "start": "13/06/2026",
      "due": "20/06/2026",
      "startISO": "2026-06-13",
      "dueISO": "2026-06-20",
      "owner": "Matheus Pereira",
      "completion": "-",
      "completionISO": null,
      "hours": "8",
      "duration": "8",
      "group": "Marco 3 - Desenvolvimento"
    },
    {
      "id": "1.3.6",
      "level": 3,
      "name": "1.3.3.3 Protótipo da interface",
      "progress": 0,
      "start": "20/06/2026",
      "due": "24/06/2026",
      "startISO": "2026-06-20",
      "dueISO": "2026-06-24",
      "owner": "Matheus Pereira",
      "completion": "-",
      "completionISO": null,
      "hours": "8",
      "duration": "5",
      "group": "Marco 3 - Desenvolvimento"
    },
    {
      "id": "1.5.1",
      "level": 3,
      "name": "1.4.1.1 Preparação de materiais de treinamento",
      "progress": 0,
      "start": "21/06/2026",
      "due": "24/06/2026",
      "startISO": "2026-06-21",
      "dueISO": "2026-06-24",
      "owner": "Matheus Lucas",
      "completion": "-",
      "completionISO": null,
      "hours": "8",
      "duration": "4",
      "group": "Marco 4 - Implementação"
    },
    {
      "id": "1.5.2",
      "level": 3,
      "name": "1.4.2.1 Migração de dados",
      "progress": 0,
      "start": "24/06/2026",
      "due": "27/06/2026",
      "startISO": "2026-06-24",
      "dueISO": "2026-06-27",
      "owner": "Claude.IA, Matheus Lucas",
      "completion": "-",
      "completionISO": null,
      "hours": "3",
      "duration": "4",
      "group": "Marco 4 - Implementação"
    }
  ],
  "timelineStart": "2026-03-09",
  "timelineEnd": "2026-06-30"
};

const qs = (s, root=document) => root.querySelector(s);
const qsa = (s, root=document) => [...root.querySelectorAll(s)];
const fmtMoney = n => Number(n).toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
const fmtDate = iso => {
  if(!iso) return '-';
  const [y,m,d] = iso.split('-');
  return `${d}/${m}/${y}`;
};
const clamp = (n,min,max) => Math.min(max, Math.max(min,n));

function statusOf(item){
  if(item.progress >= 100) return 'done';
  if(DATA.overdueTasks.includes(item.id)) return 'overdue';
  if(item.progress > 0) return 'progress';
  return 'pending';
}
function statusLabel(item){
  const st = statusOf(item);
  if(st === 'done') return 'Concluída';
  if(st === 'overdue') return 'Atrasada';
  if(st === 'progress') return 'Em andamento';
  return 'Pendente';
}
function statusClass(item){
  const st = statusOf(item);
  if(st === 'done') return 'status-done';
  if(st === 'overdue') return 'status-overdue';
  if(st === 'progress') return 'status-progress';
  return 'status-pending';
}

function updateHero(){
  qs('#deadlineHero').textContent = DATA.deadline;
  qs('#overallValue').textContent = `${DATA.overallProgress}%`;
  qs('#statusPill').textContent = DATA.statusLabel;
  qs('#statusPill').classList.toggle('ok', DATA.statusTone === 'ok');
  qs('#statusPill').classList.toggle('critical', DATA.statusTone === 'warning');
  qs('#statusNote').textContent = `Data de status: ${DATA.statusDate}. Prazo oficial mantido em ${DATA.deadline}, porém com necessidade de ação corretiva.`;
  const deg = DATA.overallProgress * 3.6;
  qs('#overallDonut').style.background =
    `conic-gradient(var(--green) 0deg, var(--blue) ${Math.max(20, deg)}deg, rgba(255,255,255,.08) ${deg}deg 360deg)`;
}

function updateKPIs(){
  qs('#kpiProgress').textContent = `${DATA.overallProgress}%`;
  qs('#kpiProgressSub').textContent = `Planejado RA3: ${DATA.plannedProgress}% | desvio: ${DATA.deviation >= 0 ? '+' : ''}${DATA.deviation} p.p.`;
  qs('#kpiDeadline').textContent = DATA.deadline.slice(0,5);
  qs('#kpiDays').textContent = `${DATA.remainingDays} dias restantes`;
  qs('#kpiCost').textContent = fmtMoney(DATA.revisedCost);
  qs('#kpiCostSub').textContent = `Inclui reserva: ${fmtMoney(DATA.contingencyReserve)}`;
  qs('#kpiTasks').textContent = `${DATA.doneTasks}/${DATA.totalTasks}`;
  qs('#kpiTasksSub').textContent = `${DATA.pendingTasks} pendentes`;
  qs('#realLabel').textContent = `${DATA.overallProgress}%`;
  qs('#plannedLabel').textContent = `${DATA.plannedProgress}%`;
  qs('#realBar').style.width = `${DATA.overallProgress}%`;
  qs('#plannedBar').style.width = `${DATA.plannedProgress}%`;
  const trendText = DATA.deviation >= 0 ? `+${DATA.deviation} p.p.` : `${DATA.deviation} p.p.`;
  qs('#trendBadge').textContent = trendText;
  qs('#progressInsight').textContent = DATA.deviation >= 0
    ? `O projeto está acima do planejado. Mesmo assim, deve manter acompanhamento de riscos e custos.`
    : `O projeto está com ${DATA.overallProgress}% concluído contra ${DATA.plannedProgress}% planejado, gerando desvio de ${DATA.deviation} p.p. A prioridade é recuperar o atraso sem alterar o prazo oficial.`;
  qs('#baseCost').textContent = fmtMoney(DATA.baseCost);
  qs('#revisedCost').textContent = fmtMoney(DATA.revisedCost);
  qs('#costVariation').textContent = `+${fmtMoney(DATA.costDelta)}`;
  qs('#costVariationPct').textContent = `+${DATA.costDeltaPct}% sobre o custo-base`;
  qs('#costDeltaBar').style.width = `${clamp(DATA.costDeltaPct * 18, 8, 100)}%`;
  qs('#costInsight').textContent = `A situação atual adicionou ${fmtMoney(DATA.costDelta)} ao custo-base, incluindo solução paga substituta, esforço adicional e reserva de contingência de ${fmtMoney(DATA.contingencyReserve)}.`;
  qs('#doneCount').textContent = DATA.doneTasks;
  qs('#pendingCount').textContent = DATA.pendingTasks;
  qs('#overdueCount').textContent = DATA.overdueTasks.length;
}

function daysBetween(a,b){
  const d1 = new Date(a + 'T00:00:00');
  const d2 = new Date(b + 'T00:00:00');
  return Math.round((d2-d1)/(1000*60*60*24));
}

function renderTimelineAxis(){
  const start = new Date(DATA.timelineStart + 'T00:00:00');
  const end = new Date(DATA.timelineEnd + 'T00:00:00');
  const labels = ['Mar', 'Abr', 'Mai', 'Jun'];
  qs('#timelineAxis').innerHTML = labels.map(x => `<span>${x}</span>`).join('');
}

function renderGantt(filter='all'){
  const board = qs('#ganttBoard');
  const totalDays = Math.max(1, daysBetween(DATA.timelineStart, DATA.timelineEnd));
  const criticalNames = ['MUD-01', 'Modelagem', 'Banco de dados', 'Desenvolvimento da interface', 'Protótipo', 'Migração', 'Testes finais', 'Treinamento'];
  let items = DATA.tasks.filter(t => {
    const st = statusOf(t);
    const critical = criticalNames.some(c => t.name.toLowerCase().includes(c.toLowerCase()));
    if(filter === 'done') return st === 'done';
    if(filter === 'pending') return st !== 'done';
    if(filter === 'critical') return critical || st !== 'done';
    return true;
  });
  board.innerHTML = items.map(t => {
    const startDelta = daysBetween(DATA.timelineStart, t.startISO);
    const duration = Math.max(1, daysBetween(t.startISO, t.dueISO) + 1);
    const left = clamp((startDelta / totalDays) * 100, 0, 100);
    const width = clamp((duration / totalDays) * 100, 1.5, 100-left);
    const st = statusOf(t);
    const critical = criticalNames.some(c => t.name.toLowerCase().includes(c.toLowerCase()));
    const barClass = st === 'overdue' ? 'critical' : st === 'pending' ? (critical ? 'critical' : 'pending') : '';
    const tooltip = `${t.name}<br>Responsável: ${t.owner}<br>Período: ${fmtDate(t.startISO)} a ${fmtDate(t.dueISO)}<br>Progresso: ${t.progress}%`;
    return `<div class="gantt-row" data-status="${st}" data-name="${t.name.toLowerCase()}">
      <div class="gantt-name">${t.name}</div>
      <div class="gantt-track">
        <div class="gantt-bar ${barClass}" style="left:${left}%;width:${width}%" data-tooltip="${tooltip}"></div>
      </div>
      <div class="gantt-row-status">${t.progress}%</div>
    </div>`;
  }).join('');
  bindTooltips();
}

function renderMilestones(){
  qs('#milestoneList').innerHTML = DATA.milestones.map(m => {
    const label = m.type === 'Mudança' ? 'Mudança em andamento' : `${m.tasksDone}/${m.tasksTotal} tarefas`; 
    return `<div class="milestone">
      <div class="milestone-head">
        <strong>${m.name}</strong>
        <span>${label} • ${m.progress}%</span>
      </div>
      <div class="mini-meter"><span style="width:${m.progress}%"></span></div>
    </div>`;
  }).join('');
}

function renderNextTasks(){
  const list = DATA.nextTasks.length ? DATA.nextTasks : DATA.tasks.filter(t => t.progress < 100).slice(0,5);
  qs('#nextTasks').innerHTML = list.map(t => `<div class="next-item">
    <strong>${t.name}</strong>
    <span>${fmtDate(t.startISO)} a ${fmtDate(t.dueISO)} • Responsável: ${t.owner}</span>
  </div>`).join('');
}

function renderTaskTable(term=''){
  const tbody = qs('#taskTableBody');
  const normalized = term.trim().toLowerCase();
  const rows = DATA.tasks.filter(t => {
    const text = `${t.name} ${t.owner} ${t.group}`.toLowerCase();
    return !normalized || text.includes(normalized);
  });
  tbody.innerHTML = rows.map(t => `<tr>
    <td><strong>${t.name}</strong><br><span>${t.group}</span></td>
    <td>${t.owner}</td>
    <td>${fmtDate(t.startISO)} a ${fmtDate(t.dueISO)}</td>
    <td><span class="status-chip ${statusClass(t)}">${statusLabel(t)}</span></td>
    <td>
      <div class="inline-progress"><span style="width:${t.progress}%"></span></div>
      <small>${t.progress}%</small>
    </td>
  </tr>`).join('');
}

function renderRisks(){
  qs('#riskGrid').innerHTML = DATA.risks.map(r => `<article class="risk-card" data-tooltip="${r.response}">
    <span class="risk-code">${r.code} • ${r.category}</span>
    <h3>${r.risk}</h3>
    <p>Probabilidade: ${r.prob} • Impacto: ${r.impact}<br>Responsável: ${r.owner}</p>
    <span class="severity">Severidade ${r.severity}</span>
  </article>`).join('');
  bindTooltips();
}

function renderActions(){
  qs('#actionsAccordion').innerHTML = DATA.actions.map((a,i) => `<div class="action-item ${i===0?'open':''}">
    <button class="action-button" type="button">${a.title} <span>+</span></button>
    <div class="action-body">${a.text}</div>
  </div>`).join('');
  qsa('.action-button').forEach(btn => btn.addEventListener('click', () => {
    const item = btn.closest('.action-item');
    item.classList.toggle('open');
  }));
}

function bindTooltips(){
  const tip = qs('#tooltip');
  qsa('[data-tooltip]').forEach(el => {
    el.addEventListener('mousemove', e => {
      tip.innerHTML = el.dataset.tooltip;
      tip.style.left = e.clientX + 'px';
      tip.style.top = e.clientY + 'px';
      tip.classList.add('show');
    });
    el.addEventListener('mouseleave', () => tip.classList.remove('show'));
  });
}

function bindControls(){
  qsa('.control').forEach(btn => btn.addEventListener('click', () => {
    qsa('.control').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGantt(btn.dataset.filter);
  }));
  qs('#taskSearch').addEventListener('input', e => renderTaskTable(e.target.value));

  const modalText = {
    progress: {
      title:'Progresso do projeto',
      body:`O Gantt atualizado indica ${DATA.overallProgress}% de progresso consolidado. A referência RA3 usada para controle era ${DATA.plannedProgress}%, resultando em desvio de ${DATA.deviation >= 0 ? '+' : ''}${DATA.deviation} p.p.`
    },
    schedule: {
      title:'Indicador de prazo',
      body:`O prazo oficial permanece em ${DATA.deadline}, respeitando a restrição de quatro meses. O cronograma, porém, está em atenção por causa do desvio de -10 p.p., saída do desenvolvedor e aquisição emergencial da ferramenta substituta. Restam ${DATA.remainingDays} dias a partir da data de status ${DATA.statusDate}.`
    },
    cost: {
      title:'Indicador de custo',
      body:`O custo revisado com reserva é ${fmtMoney(DATA.revisedCost)}. A variação frente ao custo-base é ${fmtMoney(DATA.costDelta)} (${DATA.costDeltaPct}%), incluindo reserva de contingência de ${fmtMoney(DATA.contingencyReserve)}.`
    },
    tasks: {
      title:'Entregas previstas x realizadas',
      body:`Foram concluídas ${DATA.doneTasks} de ${DATA.totalTasks} tarefas da EAP. Permanecem ${DATA.pendingTasks} tarefas pendentes e atividades em andamento críticas, concentradas em banco de dados, interface, protótipo, migração, treinamento e testes finais.`
    }
  };
  qsa('.kpi-card[data-modal]').forEach(card => card.addEventListener('click', () => {
    const info = modalText[card.dataset.modal];
    qs('#modalTitle').textContent = info.title;
    qs('#modalBody').textContent = info.body;
    qs('#infoModal').showModal();
  }));
  qs('#modalClose').addEventListener('click', () => qs('#infoModal').close());
}

function revealOnScroll(){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold:.09 });
  qsa('.reveal').forEach(el => observer.observe(el));
}

function init(){
  updateHero();
  updateKPIs();
  bindTooltips();
  renderTimelineAxis();
  renderGantt();
  renderMilestones();
  renderNextTasks();
  renderTaskTable();
  renderRisks();
  renderActions();
  bindControls();
  revealOnScroll();
}

document.addEventListener('DOMContentLoaded', init);
