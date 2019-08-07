
const titleText = document.getElementById('title');
const questionText = document.getElementById('question');

const questions = [
    {question: '小説「ハリー・ポッター」シリーズの作者は男である。○か×か。', anser: 0},
    {question: 'ポケモンと妖怪ウォッチ、先にゲームが発売されたのは妖怪ウォッチである。○か×か。', anser: 0},
    {question: 'アニメ「ドラえもん」の最初の映画は「のび太の恐竜」である。○か×か。', anser: 1},
    {question: '「ちびまる子ちゃん」の物語の舞台は東京である。○か×か。', anser: 0}
];

onStart();

function anser(a) {

    if (sum < questions.length) {

        if (a === questions[sum].anser) {
            console.log('正解');
            correctAnser++;
        } else {
            console.log('不正解');
        }
        sum++;
    }
    if (sum === questions.length) {
        alert(`${questions.length}問中${correctAnser}問正解です`);
        onStart();
    }
    writeQuestion();
}

function onStart() {
    sum = 0;
    correctAnser = 0;
    writeQuestion();
}

function writeQuestion() {
    titleText.textContent = `第${sum + 1}問`;
    questionText.textContent = questions[sum].question;
}