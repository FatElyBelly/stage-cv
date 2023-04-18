var consisteSkillsOpen = false
var conditionSkillsOpen = false

var consisteSkills = document.getElementById("consisteSkills")
var conditionSkills = document.getElementById("conditionSkills")

openConsisteSkills = () => {
    if (consisteSkillsOpen == false) {
        closeConditionSkills()
        consisteSkills.style.display = 'flex'
        consisteSkillsOpen = true
        consisteSkills.scrollIntoView()
        setTimeout(() => {
            consisteSkills.style.padding = '1rem'
            consisteSkills.style.height = '35rem'
            const yOffset = -250
            const y = document.getElementById("resetScrollAfterSkills").getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({top: y, behavior: 'smooth'})
        }, 1)  
    } else {
        closeConsisteSkills()
    }
}

openConditionSkills = () => {
    if (conditionSkillsOpen == false) {
        closeConsisteSkills()
        conditionSkills.style.display = 'flex'
        conditionSkillsOpen = true
        conditionSkills.scrollIntoView()
        setTimeout(() => {
            conditionSkills.style.padding = '1rem'
            conditionSkills.style.height = '35rem'
            const yOffset = -250
            const y = document.getElementById("resetScrollAfterSkills").getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({top: y, behavior: 'smooth'})
        }, 1)  
    } else {
        closeConditionSkills()
    }
}

closeConsisteSkills = () => {
    consisteSkills.style.padding = '0'
    consisteSkills.style.height = '0'
    consisteSkillsOpen = false
    document.getElementById("skillsSection").scrollIntoView()
}

closeConditionSkills = () => {
    conditionSkills.style.padding = '0'
    conditionSkills.style.height = '0'
    conditionSkillsOpen = false
    document.getElementById("skillsSection").scrollIntoView()
}

var pageOverlay = document.getElementById('pageOverlay')
var showImage = document.getElementById('showImage')
var shownImage = document.getElementById('shownImage')
var showText = document.getElementById('showText')
var shownText = document.getElementById('shownText')

openImage = (img) => {
    shownImage.src = "images/" + img + '.png';
    pageOverlay.style.display = 'block'
    showImage.style.display = 'block'
}

openText = (text) => {
    shownText.textContent = ''
    pageOverlay.style.display = 'block'
    showText.style.display = 'block'
    TypeWriter(shownText, text, 30)
}

function TypeWriter(target, text, delay) {
    target.textContent = ''
	let _delay = 0
	for (let i = 0; i < text.length; i++) {
		_delay += delay
		window.setTimeout(function() {
			target.textContent += text[i];
		}, _delay)
	}
}

function InverseTypeWriter(target, delay) {
	let _delay = 0
	for (let i = target.textContent.length; i > 0; i-=1) {
		_delay += delay
		window.setTimeout(function() {
			target.textContent = target.textContent.substring(0,i)
		}, _delay)
	}
}

closeImage = () => {
    showImage.style.display = 'none'
    pageOverlay.style.display = 'none'
}

closeText = () => {
    showText.style.display = 'none'
    pageOverlay.style.display = 'none'
    shownText.textContent = ''
}

copyText = (text, alertText) => {
    navigator.clipboard.writeText(text).then(() => {
        alert(alertText);
        /* Resolved - text copied to clipboard successfully */
    },() => {
        alert('Failed to copy');
        /* Rejected - text failed to copy to the clipboard */
    });
}

var homeChangeText = document.getElementById('homeSlideText')

changeText = () => {
    let words = ['WEB DEVELOPER', 'GAME DEVELOPER', 'CURIOUS', 'GAMER', 'GYMBRO', 'INVESTOR', 'PERSEVERING', 'SWING TRADER', 'ADVENTUROUS', 'INDEFATIGABLE', 'EXPERIMENTAL', "ORGANIZED",
    'DILIGENT', 'EFFICIENT', 'DEDICATED', 'AMBITIOUS', 'PRODUCTIVE', 'COMMITTED', 'CONSCIENTIOUS', 'ENGAGED', 'ENERGETIC', 'DETERMINED', 'DYNAMIC']
    j=0
    setInterval(() => {
        homeChangeText.textContent = ''
        if (j<words.length){
            TypeWriter(homeChangeText, words[j], 50)
            j+=1
        }
        else{j=0}
    }, 1000)
}

changeText()

// Contact buttons

contactOpen = (className, text) => {
    textElement = document.getElementsByClassName(className)[1]
    textElement.display = 'block'
    textElement.textContent = text
}

contactClose = (className) => {
    textElement = document.getElementsByClassName(className)[1]
    textElement.textContent = ''
    textElement.display = 'none'
}