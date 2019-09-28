var questions = [
	{ id: 1, qst: 'What is the first letter of your last name?' },
	{
		id: 2,
		qst: 'How old were you when tsunami hit Aceh (2004)?',
		opt: ['5-8', '8-10', '10-15', 'Way younger', 'Way older'],
		ans: [
			"lose someone you love the most while you're still pretty young",
			'die at age no more than 40',
			'suffer from a very serious illness',
			'lose all your money, fame, and family because of unpayable debt',
			'never get a settled life, and you will live your whole life on the edge of poverty'
		]
	},
	{
		id: 3,
		qst:
			"Does your Instagram's username have non-alphabetic characters? Write down any of it without space!",
		ans: ['wait longer on', 'look deeply into', 'be persistent on']
	},
	{
		id: 4,
		qst: 'Do you prefer skipping breakfast or skipping dinner?',
		opt: ['Skipping breakfast', 'Skipping dinner'],
		ans: [
			'make yourself into a difficult situation',
			'procrastinate on any task'
		]
	},
	{
		id: 5,
		qst: 'What is your usual shirt size?',
		opt: ['XS', 'S', 'M', 'L', 'XL', 'XXXL'],
		ans: [
			'this tiny little kindness that you need to grow',
			'this small faith in yourself that you must pierce deep',
			"a bravery that's getting stronger and stronger",
			'good heart and good feeling',
			'unstoppable power',
			'this very good understanding of the feelings of others'
		]
	},
	{
		i6: 6,
		qst: 'How do you go to Hacktiv8?',
		opt: [
			'By private vehicle',
			'By public transport',
			'On foot',
			'By paratrooping',
			'By teleporting'
		],
		ans: [
			'You may stand high, but you will fall',
			'You may be falling, but you will always rise again',
			"You may be struggling, but you'll find the way",
			"You may be brave, but don't let it drive you to your death",
			'You may have happiness now, but rain always comes after the hot sun'
		]
	},
	{
		id: 7,
		qst: 'Will you adopt a kitten/puppy? Will you adopt a son/daughter?',
		opt: ['Yes', 'No', 'Yes and No', 'No and Yes', 'Half Yes half No'],
		ans: [
			'always share happiness with others',
			'will always be grateful of yourself',
			'cares about small things',
			'dares to take big responsibility',
			'always has a new way of thinking'
		]
	}
]

// var prophecy =
// 	'You are a person who like to' /* id3(wait longer on___, look deeply into,,,,, be persistent on.... )*/ +
// 	'someone. You often' +
// 	/*id4(make yourself into difficult situation, procrastinate to any task)*/ +'but you always like to take the challenge. You are a person who' /*id7(always share happiness to others, always be grateful of yourself, care to small things, have courage to take big responsibility, always have new way of thinking)*/ +
// 	"But remember, things aren't always going well. You will" /*id2(Suffer of heartbroken on your adulthood, die young, get a very serous illness, have a debt you never be able to pay, never get a promotion)*/ +
// 	'Will you accept those fate? Or change it while you can? Remember that however you look into yourself, you always have' /*id5(this tiny little goodness that you need to grow, this small faith on yourself that you must pierce deep, a bravery that )*/ +
// 	'inside your soul. Always remember this:' /*id1*/ +
// 	'His sequence of nummbers and letters will mean something to you one day and will save you from all bad things that may happen to you. so always keep it in mind. And take my last words of wisdom'
// /*id6 (you may be high but you will fall, you may be low but you will rise, you may be struggling but you'll find a way, you may be brave but you will die, you may have happiness now but rain comes after the sun)*/

let usedQuestions = []
let answers = {}

function main() {
	document.getElementById('start-area').style.display = 'none'
	document.getElementById('title-area').innerHTML =
		"<h1>Esmeralda's Prophecy</h1>"
	showQuestion(usedQuestions)
}

function showQuestion() {
	const questionArea = document.getElementById('question-area')
	questionArea.style.display = 'block'
	let index = 0
	findQuestion: while (true) {
		index = Math.floor(Math.random() * questions.length)
		if (usedQuestions.length === 0) {
			break
		} else {
			for (let i = 0; i < usedQuestions.length; i++) {
				if (index === usedQuestions[i]) {
					continue findQuestion
				}
			}
			break
		}
	}

	const question = questions[index].qst
	const answer = questions[index].opt
	const options = document.getElementById('options')
	options.innerHTML = ''

	document.getElementById('question').innerHTML = question
	if (answer !== undefined) {
		for (let i = 0; i < answer.length; i++) {
			let div = document.createElement('div')
			div.innerHTML = `<input type="radio" name="option" id="${i}" value="${i}"><label for="${i}">${answer[i]}</label>`
			options.appendChild(div)
		}
	} else {
		options.innerHTML = `<input type="text" name="textAnswer" id="textAnswer">`
	}
	usedQuestions.push(index)
}

function checkNextQuestion() {
	if (usedQuestions.length < questions.length) {
		showQuestion()
	} else {
		document.getElementById('question-area').style.display = 'none'
		document.getElementById('result-area').style.display = 'block'
		showResult()
	}
}

// questions[2].ans[answers[2]]
function showResult() {
	let result = document.getElementById('result')
	result.innerHTML = `You are a person who likes to ${
		questions[2].ans[answers[2]]
	}	someone/something. You often ${
		questions[3].ans[answers[3]]
	}, but you always like to take the challenge. You are a person who ${
		questions[6].ans[answers[6]]
	}. <br>But remember, things aren't always going well. You will ${
		questions[1].ans[answers[1]]
	}. Will you accept those fate? Or change it while you can? Remember that however you look into yourself, you always have ${
		questions[4].ans[answers[4]]
	} inside your soul. <br>Always remember this: <strong>${
		answers[0]
	}</strong>. This sequence of numbers and letters will mean something to you one day and will save you from all bad things that may happen. so always keep it in mind. And take my last words of wisdom: ${
		questions[5].ans[answers[5]]
	}.`
}

function restart() {
	location.reload(true)
}

function checkAnswer() {
	let options = document.getElementById('options').childNodes
	if (options.length > 1) {
		for (let i = 0; i < options.length; i++) {
			let option = options[i].firstChild
			if (option.checked) {
				storeAnswer()
				return
			}
		}
		alert('Choose one of the options!')
	} else {
		let index = usedQuestions[usedQuestions.length - 1]
		let regex
		if (index === 0) {
			regex = /^[a-zA-Z]$/
		} else {
			regex = /^[,._-]+$/
		}
		if (regex.test(options[0].value)) {
			storeAnswer()
		} else {
			alert('Type the answer correctly!')
			options[0].value = ''
		}
	}
}

function storeAnswer() {
	let index = usedQuestions[usedQuestions.length - 1]
	let options = document.getElementById('options').childNodes
	if (options.length > 1) {
		for (let i = 0; i < options.length; i++) {
			let option = options[i].firstChild
			if (option.checked) {
				answers[index] = option.value
				break
			}
		}
	} else {
		if (index === 0) {
			let sequence = ''
			let charCode = options[0].value.toLowerCase().charCodeAt(0) - 96
			for (let i = 0; i < 3; i++) {
				sequence += String.fromCharCode(
					Math.floor(Math.random() * (26 - 1) + 1) + 65
				)
			}
			sequence += '-'
			sequence += Math.floor(
				(options[0].value.toLowerCase().charCodeAt(0) / 2) * 3 + 96
			)
			sequence += '-'
			sequence +=
				charCode < 20
					? String.fromCharCode(charCode + 6 - 3 + 65)
					: String.fromCharCode(charCode - 3 + 65)
			sequence +=
				charCode > 20
					? String.fromCharCode(charCode - 20 + 5 + 65)
					: String.fromCharCode(charCode + 5 + 65)
			answers[index] = sequence
		} else {
			answers[index] =
				options[0].value[0] === '_'
					? 0
					: options[0].value[0] === ','
					? 1
					: options[0].value[0] === '.'
					? 2
					: Math.floor(Math.random() * 3)
		}
	}
	checkNextQuestion()
}
