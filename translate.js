const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// Define the new QUIZ_LIST
const quiz_list_str = `const QUIZ_LIST = {
    en: {
        red: [
            { q: "The light turned red. What should you do?", a: "Come to a full stop", o: ["Accelerate more", "Cross with caution", "Honk and cross"] },
            { q: "Penalty for running a red light?", a: "Very Severe Fine", o: ["None", "Just a warning", "Light Fine"] },
            { q: "At a red light, does the pedestrian have priority?", a: "Always", o: ["Never", "Only if senior", "Only with guards"] }
        ],
        yellow: [
            { q: "What is the correct behavior for a yellow light?", a: "Slow down and stop", o: ["Accelerate quickly", "Brake suddenly", "Maintain speed"] },
            { q: "What does the yellow light indicate?", a: "Attention: about to close", o: ["Go full speed", "Light broken", "Turn right"] },
            { q: "Is it safe to accelerate on yellow?", a: "No, high risk of accident", o: ["Yes, always", "Only if far", "If no guards"] }
        ],
        green: [
            { q: "The light is green but the intersection is blocked. Do you:", a: "Wait before the line", o: ["Enter anyway", "Honk loudly", "Reverse"] },
            { q: "Signal turned green. What is the first thing to check?", a: "If crossing is clear", o: ["Your phone", "The radio", "Tire pressure"] }
        ],
        general: [
            { q: "Safe side distance for passing a cyclist?", a: "1.5 meters", o: ["0.5m", "Close", "10 meters"] },
            { q: "Seatbelt usage is mandatory for:", a: "Everyone in the vehicle", o: ["Only driver", "Only front seats", "Older cars only"] }
        ]
    },
    pt: {
        red: [
            { q: "O farol ficou vermelho. O que você deve fazer?", a: "Parar totalmente", o: ["Acelerar mais", "Cruzar com cuidado", "Buzinar e cruzar"] },
            { q: "Penalidade por avançar o sinal vermelho?", a: "Multa Gravíssima", o: ["Nenhuma", "Apenas advertência", "Multa Leve"] },
            { q: "No sinal vermelho, o pedestre tem prioridade?", a: "Sempre", o: ["Nunca", "Só idosos", "Só com guardas"] }
        ],
        yellow: [
            { q: "Qual o comportamento correto no sinal amarelo?", a: "Reduzir e parar", o: ["Acelerar rápido", "Frear bruscamente", "Manter velocidade"] },
            { q: "O que indica a luz amarela?", a: "Atenção: vai fechar", o: ["Acelerar tudo", "Semáforo quebrado", "Vire à direita"] },
            { q: "É seguro acelerar no farol amarelo?", a: "Não, alto risco de acidente", o: ["Sim, sempre", "Só se estiver longe", "Se não houver guardas"] }
        ],
        green: [
            { q: "O farol está verde mas o cruzamento está bloqueado. Você:", a: "Espera antes da faixa", o: ["Entra assim mesmo", "Buzina alto", "Dá ré"] },
            { q: "O sinal abriu. O que checar primeiro?", a: "Se o cruzamento está livre", o: ["O celular", "O rádio", "A pressão do pneu"] }
        ],
        general: [
            { q: "Distância lateral segura para passar ciclista?", a: "1.5 metros", o: ["0.5m", "Perto", "10 metros"] },
            { q: "O uso do cinto de segurança é obrigatório para:", a: "Todos no veículo", o: ["Só o motorista", "Só os bancos da frente", "Só carros velhos"] }
        ]
    },
    es: {
        red: [
            { q: "La luz se puso roja. ¿Qué debes hacer?", a: "Detenerse por completo", o: ["Acelerar más", "Cruzar con cuidado", "Tocar bocina y cruzar"] },
            { q: "¿Multa por pasarse un semáforo en rojo?", a: "Multa Muy Grave", o: ["Ninguna", "Solo advertencia", "Multa Leve"] },
            { q: "¿En semáforo rojo, el peatón tiene prioridad?", a: "Siempre", o: ["Nunca", "Solo mayores", "Solo con guardias"] }
        ],
        yellow: [
            { q: "¿Comportamiento correcto en luz amarilla?", a: "Reducir la velocidad y parar", o: ["Acelerar rápido", "Frenar de golpe", "Mantener velocidad"] },
            { q: "¿Qué indica la luz amarilla?", a: "Atención: a punto de cerrar", o: ["Ir a toda velocidad", "Luz rota", "Girar a la derecha"] },
            { q: "¿Es seguro acelerar en amarillo?", a: "No, alto riesgo", o: ["Sí, siempre", "Solo si está lejos", "Si no hay guardias"] }
        ],
        green: [
            { q: "La luz está verde pero la intersección está bloqueada:", a: "Esperar antes de la línea", o: ["Entrar de todos modos", "Tocar bocina", "Retroceder"] },
            { q: "La señal se puso verde. ¿Qué revisar primero?", a: "Si el cruce está libre", o: ["Tu teléfono", "La radio", "Presión del neumático"] }
        ],
        general: [
            { q: "¿Distancia lateral segura para pasar a un ciclista?", a: "1.5 metros", o: ["0.5m", "Cerca", "10 metros"] },
            { q: "¿El uso del cinturón de seguridad es obligatorio para:", a: "Todos en el vehículo", o: ["Solo el conductor", "Solo asientos delanteros", "Solo autos viejos"] }
        ]
    },
    zh: {
        red: [
            { q: "红灯亮了。 你该怎么办？", a: "完全停止", o: ["加速", "小心通过", "鸣笛并通过"] },
            { q: "闯红灯的处罚？", a: "非常严酷的罚款", o: ["没有", "只是警告", "轻微罚款"] },
            { q: "在红灯下，行人有优先权吗？", a: "总是", o: ["从不", "只有老人", "只有保安"] }
        ],
        yellow: [
            { q: "黄灯时的正确行为是什么？", a: "减速并停车", o: ["快速加速", "急刹车", "保持速度"] },
            { q: "黄灯指示什么？", a: "注意：即将红灯", o: ["全速前进", "灯坏了", "右转"] },
            { q: "黄灯时加速安全吗？", a: "不，事故高发", o: ["是的", "只有当你很远时", "如果没有警察"] }
        ],
        green: [
            { q: "绿灯亮但十字路口被堵塞。 你：", a: "在线前等待", o: ["直接进入", "大声鸣笛", "后退"] },
            { q: "信号变绿。 首先要检查什么？", a: "交叉路口是否畅通", o: ["你的手机", "收音机", "胎压"] }
        ],
        general: [
            { q: "通过骑自行车人的安全侧向距离？", a: "1.5米", o: ["0.5米", "靠近", "10米"] },
            { q: "安全带使用对于_____是强制性的：", a: "车内所有人", o: ["仅驾驶员", "仅前排座椅", "仅旧车"] }
        ]
    }
};

const I18N = {
    pt: { hs: "SEGURANÇA NA ESTRADA", hp: "DURABILIDADE", nitro: "NITRO", goal: "META:", bal: "SALDO ACUMULADO: $", balMenu: "SALDO ATUAL: $", balGarage: "SEU SALDO: $", start: "INICIAR CORRIDA", how: "COMO JOGAR", garage: "GARAGEM", tutTitle: "TUTORIAL", tutText: "• <b>W / ⬆️</b>: Acelerar<br>• <b>S / ⬇️</b>: Frear / Ré<br>• <b>A - D / ⬅️ - ➡️</b>: Direção<br>• <b>ESPAÇO</b>: Ativar <b>NITRO</b><br>• <b>QUIZ</b>: Resolva em 10s para ganhar $ e HP!<br>• <b>GARAGEM</b>: Compre carros melhores.", back: "VOLTAR", garTitle: "GARAGEM", buy: "COMPRAR", owned: "POSSUI", equip: "EQUIPADO", select: "SELECIONAR", locked: "BLOQUEADO", paused: "PAUSADO", resume: "VOLTAR", restart: "REINICIAR", menu: "MENU PRINCIPAL", end: "FIM", victory: "VITÓRIA!", failed: "FALHOU", retry: "TENTAR NOV.", menuBtn: "MENU", trafficPop: "🚦 FAROL À FRENTE!!", kmh: "KM/H", disc: "Regras conforme as Leis de Trânsito Brasileiras" },
    en: { hs: "SECURITY ON THE ROAD", hp: "DURABILITY", nitro: "NITRO", goal: "GOAL:", bal: "BALANCE: $", balMenu: "CURRENT BALANCE: $", balGarage: "YOUR BALANCE: $", start: "START RACE", how: "HOW TO PLAY", garage: "GARAGE", tutTitle: "TUTORIAL", tutText: "• <b>W / ⬆️</b>: Accelerate<br>• <b>S / ⬇️</b>: Brake / Reverse<br>• <b>A - D / ⬅️ - ➡️</b>: Steering<br>• <b>SPACE</b>: Activate <b>NITRO</b><br>• <b>QUIZ</b>: Solve in 10s to gain $ and HP!<br>• <b>GARAGE</b>: Buy cars to improve stats.", back: "BACK", garTitle: "GARAGE", buy: "BUY", owned: "OWNED", equip: "EQUIPPED", select: "SELECT", locked: "LOCKED", paused: "PAUSED", resume: "RESUME", restart: "RESTART", menu: "MAIN MENU", end: "END", victory: "VICTORY!", failed: "FAILED", retry: "RETRY", menuBtn: "MENU", trafficPop: "🚦 TRAFFIC LIGHT AHEAD!!", kmh: "KM/H", disc: "Rules comply with Traffic Laws" },
    es: { hs: "SEGURIDAD EN LA VÍA", hp: "DURABILIDAD", nitro: "NITRO", goal: "META:", bal: "SALDO: $", balMenu: "SALDO ACTUAL: $", balGarage: "TU SALDO: $", start: "INICIAR CARRERA", how: "CÓMO JUGAR", garage: "GARAJE", tutTitle: "TUTORIAL", tutText: "• <b>W / ⬆️</b>: Acelerar<br>• <b>S / ⬇️</b>: Frenar / Marcha atrás<br>• <b>A - D / ⬅️ - ➡️</b>: Dirección<br>• <b>ESPACIO</b>: Activar <b>NITRO</b><br>• <b>QUIZ</b>: ¡Resuelve en 10s para ganar $ y HP!<br>• <b>GARAJE</b>: Compra coches.", back: "VOLVER", garTitle: "GARAJE", buy: "COMPRAR", owned: "OBTENIDO", equip: "EQUIPADO", select: "SELECCIONAR", locked: "BLOQUEADO", paused: "PAUSADO", resume: "REANUDAR", restart: "REINICIAR", menu: "MENÚ PRINCIPAL", end: "FIN", victory: "¡VICTORIA!", failed: "FRACASÓ", retry: "REINTENTAR", menuBtn: "MENÚ", trafficPop: "🚦 ¡SEMBÁFORO EN ADELANTE!", kmh: "KM/H", disc: "Normas de tránsito" },
    zh: { hs: "道路安全", hp: "耐久度", nitro: "氮气", goal: "目标：", bal: "余额：$", balMenu: "当前余额：$", balGarage: "你的余额：$", start: "开始比赛", how: "怎么玩", garage: "车库", tutTitle: "教程", tutText: "• <b>W / ⬆️</b>: 加速<br>• <b>S / ⬇️</b>: 刹车 / 倒车<br>• <b>A - D / ⬅️ - ➡️</b>: 转向<br>• <b>空格</b>: 激活 <b>氮气</b><br>• <b>测试</b>: 解答可获得金钱！<br>• <b>车库</b>: 购买汽车。", back: "返回", garTitle: "车库", buy: "购买", owned: "拥有", equip: "装备", select: "选择", locked: "锁定", paused: "暂停", resume: "继续", restart: "重新开始", menu: "主菜单", end: "结束", victory: "胜利！", failed: "失败", retry: "重试", menuBtn: "菜单", trafficPop: "🚦 前方有红绿灯!!", kmh: "KM/H", disc: "遵守交通规则" }
};
let curLang = localStorage.getItem('otr_lang') || 'pt';

function applyLang() {
    const l = I18N[curLang];
    document.querySelectorAll('.hp-label').forEach(e => e.innerText = l.hp);
    document.querySelectorAll('.nitro-label').forEach(e => e.innerText = l.nitro);
    document.getElementById('start-btn').innerText = l.start;
    document.getElementById('tut-btn').innerText = l.how;
    document.getElementById('garage-btn').innerText = l.garage;
    document.getElementById('tut-title').innerText = l.tutTitle;
    document.getElementById('tut-text').innerHTML = l.tutText;
    document.getElementById('exit-tut').innerText = l.back;
    document.getElementById('gar-title').innerText = l.garTitle;
    document.getElementById('exit-garage').innerText = l.back;
    document.getElementById('resume-btn').innerText = l.resume;
    document.getElementById('restart-btn').innerText = l.restart;
    document.getElementById('back-menu').innerText = l.menu;
    document.getElementById('res-menu').innerText = l.menuBtn;
    document.getElementById('retry-btn').innerText = l.retry;
    document.getElementById('kmh-text').innerText = l.kmh;
    document.getElementById('pause-title').innerText = l.paused;
    document.getElementById('disc-text').innerText = l.disc;
    document.getElementById('goal-label').innerText = l.goal;
    document.getElementById('main-title').innerText = l.hs;
    syncHUD(); 
}

function t(key) { return I18N[curLang][key]; }
`;

// Replace QUIZ_LIST
let quiz_start = html.indexOf("const QUIZ_LIST = {");
if (quiz_start !== -1) {
    let quiz_end = html.indexOf("};\\n", quiz_start);
    if(quiz_end === -1) quiz_end = html.indexOf("};", quiz_start);
    if(quiz_end !== -1) {
        quiz_end += 2;
        html = html.substring(0, quiz_start) + quiz_list_str + html.substring(quiz_end);
    }
}

// Add UI strings into HTML
html = html.replace('DURABILITY <div', '<span class="hp-label">DURABILITY</span> <div');
html = html.replace('NITRO <div', '<span class="nitro-label">NITRO</span> <div');
html = html.replace('GOAL: <span id="dist-txt"', '<span id="goal-label">GOAL:</span> <span id="dist-txt"');
html = html.replace('KM/H</div>', '<span id="kmh-text">KM/H</span></div>');
html = html.replace('h1 style="color:var(--safety-cyan)">TUTORIAL<', 'h1 id="tut-title" style="color:var(--safety-cyan)">TUTORIAL<');
html = html.replace('<div class="tut-box">', '<div class="tut-box" id="tut-text">');
html = html.replace('SECURITY ON THE ROAD</h1>', '<span id="main-title">SECURITY ON THE ROAD</span></h1>');

const oldTutText = [
    '• <b>W / ⬆️</b>: Accelerate (Start movement)<br>\\n',
    '                • <b>S / ⬇️</b>: Brake / Reverse Gear<br>\\n',
    '                • <b>A - D / ⬅️ - ➡️</b>: Steering Controls<br>\\n',
    '                • <b>SPACE</b>: Activate <b>NITRO</b> (Burst speed!)<br>\\n',
    '                • <b>QUIZ</b>: Solve in 10s to gain $ and HP!<br>\\n',
    '                • <b>GARAGE</b>: Buy cars in order to improve stats.\\n'
];
for(let str of oldTutText) html = html.replace(str, '');

html = html.replace('h1 style="color:var(--safety-cyan)">GARAGE<', 'h1 id="gar-title" style="color:var(--safety-cyan)">GARAGE<');
html = html.replace('h1 style="color:var(--safety-cyan); font-size:3rem;">PAUSED<', 'h1 id="pause-title" style="color:var(--safety-cyan); font-size:3rem;">PAUSED<');
html = html.replace('class="disclaimer">Rules comply', 'class="disclaimer" id="disc-text">Rules comply');

// Fix UI bindings in Javascript
html = html.replace("document.getElementById('m-val').innerText = '$' + m;", "document.getElementById('m-val').innerText = t('bal') + m;");
html = html.replace("document.getElementById('m-menu').innerText = '$' + m;", "document.getElementById('m-menu').innerText = t('balMenu') + m;");
html = html.replace("document.getElementById('m-garage').innerText = '$' + m;", "document.getElementById('m-garage').innerText = t('balGarage') + m;");

// Fix popQuiz
html = html.replace("const pool = QUIZ_LIST[type] || QUIZ_LIST.general;", "const pool = QUIZ_LIST[curLang][type] || QUIZ_LIST[curLang].general;");
html = html.replace('showPopup("🚦 TRAFFIC LIGHT AHEAD!!", "white");', 'showPopup(t("trafficPop"), "white");');

// Fix End
html = html.replace('document.getElementById(\\'res-title\\').innerText = "FAILED";', 'document.getElementById(\\'res-title\\').innerText = t("failed");');
html = html.replace('document.getElementById(\\'res-title\\').innerText = "VICTORY!";', 'document.getElementById(\\'res-title\\').innerText = t("victory");');

// Fix Garage logic
const oldGarLogic = `const card = document.createElement('div'); card.style = "background:#000; padding:12px; margin-bottom:8px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; border:1px solid " + (sel ? 'var(--safety-cyan)' : '#333');
                card.innerHTML = \`<div><b>\${v.n}</b><br><small>\${has ? 'OWNED' : '$' + v.p}</small></div><button class="btn" style="margin:0; padding:6px 12px; font-size:0.8rem; \${(!has && !unlock) ? 'opacity:0.5;' : ''}">\${has ? (sel ? 'EQUIPPED' : 'SELECT') : (unlock ? 'BUY' : 'LOCKED')}</button>\`;`;

const newGarLogic = `const card = document.createElement('div'); card.style = "background:#000; padding:12px; margin-bottom:8px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; border:1px solid " + (sel ? 'var(--safety-cyan)' : '#333');
                card.innerHTML = \`<div><b>\${v.n}</b><br><small>\${has ? t('owned') : '$' + v.p}</small></div><button class="btn" style="margin:0; padding:6px 12px; font-size:0.8rem; \${(!has && !unlock) ? 'opacity:0.5;' : ''}">\${has ? (sel ? t('equip') : t('select')) : (unlock ? t('buy') : t('locked'))}</button>\`;`;

html = html.replace(oldGarLogic, newGarLogic);

// Insert applyLang call into boot
html = html.replace("syncHUD();\\n            loop", "syncHUD();\\n            applyLang();\\n            loop");

// Add Language Selector HTML to Menu
const lang_html = `
            <div style="display:flex; justify-content:center; gap:10px; margin-bottom:20px;">
                <button class="btn" style="padding:5px 10px; background:#444;" onclick="changeLang('pt')">PT</button>
                <button class="btn" style="padding:5px 10px; background:#444;" onclick="changeLang('en')">EN</button>
                <button class="btn" style="padding:5px 10px; background:#444;" onclick="changeLang('es')">ES</button>
                <button class="btn" style="padding:5px 10px; background:#444;" onclick="changeLang('zh')">ZH</button>
            </div>
`;
html = html.replace('<div class="stat-badge" style="margin-bottom:20px;', lang_html + '<div class="stat-badge" style="margin-bottom:20px;');

// Add changeLang function
const change_lang_fn = `
        function changeLang(l) {
            curLang = l;
            localStorage.setItem('otr_lang', l);
            applyLang();
        }
`;
html = html.replace('function loop(now)', change_lang_fn + '\\n        function loop(now)');

fs.writeFileSync('index.html', html, 'utf-8');
console.log('Done!');
