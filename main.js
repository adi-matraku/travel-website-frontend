const learnMoreFirst = document.querySelector('.button-learn-1')
const learnMoreSecond = document.querySelector('.button-learn-2')
const learnMoreThird = document.querySelector('.button-learn-3')
const textPrimary = document.querySelector('.span-learn-more')
const textSecondary = document.querySelector('.span-learn-more-2')
const textTertiary = document.querySelector('.span-learn-more-3')

learnMoreFirst.addEventListener('click', function() {
    textPrimary.classList.toggle('show-more');
    if (learnMoreFirst.textContent === 'Learn More')
    learnMoreFirst.textContent = 'Show Less'
    else learnMoreFirst.textContent = 'Learn More'
})

learnMoreSecond.addEventListener('click', function() {
    textSecondary.classList.toggle('show-more');
    if (learnMoreSecond.textContent === 'Learn More')
    learnMoreSecond.textContent = 'Show Less'
    else learnMoreSecond.textContent = 'Learn More'
})

learnMoreThird.addEventListener('click', function() {
    textTertiary.classList.toggle('show-more');
    if (learnMoreThird.textContent === 'Learn More')
    learnMoreThird.textContent = 'Show Less'
    else learnMoreThird.textContent = 'Learn More'
})