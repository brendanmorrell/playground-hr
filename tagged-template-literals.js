const taggedTemplateFunction = (strings, ...values) => {
  console.log(strings)
  console.log(values)
}

const user = 'Brendan'
taggedTemplateFunction`blue cats are ${user}'s favorite things in the world dont you agree`
