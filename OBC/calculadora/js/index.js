import calculate  from './calculate.js'
import copyToClipBoard from './copyToClipBoard.js';
import { handleAlowedPress, handleFocus, handlePressType } from './handlePressButtons.js';
const input = document.getElementById('input');
document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click',handlePressType )
})
input.addEventListener('keydown', handleAlowedPress )
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('clear').addEventListener('click', handleFocus)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipBoard)