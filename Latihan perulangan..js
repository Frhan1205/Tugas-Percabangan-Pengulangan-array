// Mencari angka palindrome terdekat selanjutnya dari sebuah input:
// Cek suatu angka apakah palindrome
function isPalindrome(number) {
    let strNum = number.toString();
    return strNum === strNum.split('').reverse().join('');
}

// Fungsi untuk mencari palindrome terdekat
function findNextPalindrome(n) {
    // Mulai dari angka berikutnya
    n++;
    // Terus lakukan perulangan hingga menemukan palindrome
    while (!isPalindrome(n)) {
        n++;
    }
    return n;
}

// Contoh penggunaan
let input1 = 18;
let input2 = 35;

console.log("Next palindrome after", input1, "is:", findNextPalindrome(input1)); // Output: 22
console.log("Next palindrome after", input2, "is:", findNextPalindrome(input2)); // Output: 44
