// reverse a string

function reverse(str) {
    //check input
    if(!str || str.length < 2 || typeof str !== 'string') {
      return 'invalid input'
    }
    return str.split('').reverse().join('')
  }
  
  const reverse2 = str => str.split('').reverse().join('')
  
  const reverse3 = str => [...str].reverse().join('')
  
  reverse('Hello my name is Fizzy')
  reverse2('What is the answer to life?')
  reverse3('Does he know about second breakfast?')