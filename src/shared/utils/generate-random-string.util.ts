const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export function generateUniqueString(number: number): string {
  
  // const timestamp = Date.now().toString(36); // timer
  const random = Math.floor(Math.random() * (99 - 0) + 0);

  let randomString = '';
  const charactersLength = chars.length;
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    randomString += chars.charAt(randomIndex);
  }

  const base = chars.length;
  if (base <= number) {
    let result = '';
    
    while (number > 0) {
        const index = number % base;
        result = chars[index] + result;
        number = Math.floor(number / base);
    }
    
    return random + result + randomString;
  }
  
  return random + chars[number] + randomString;
}

export function generateRandomInviteCode(length: number) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}