
const randomString = (val) => {
  let randomValue = ''
  const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz'

  for (let i = 0; i < val ; i++) {
    randomValue += alphanumeric[Math.floor(Math.random() * alphanumeric.length)]
  }
  return randomValue
}

const hashGenerator = () => {
  const a = randomString(8)
  const b = randomString(4)
  const c = randomString(4)
  const d = randomString(4)
  const e = randomString(12)
  
  return `${a}-${b}-${c}-${d}-${e}`
}

const output = () => {
  const hash = hashGenerator()
  const timeWithRandomString = () => {
    setTimeout(() => {
      console.log(`${new Date().toISOString()}: ${hash}`)
      
      timeWithRandomString()
    }, 5000)
  }
  return timeWithRandomString()
}

output()
