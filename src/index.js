import css from './index.css';
import { addScore, display } from './modules/additems.js';
const form = document.getElementById('add-form');

form.addEventListener('submit', addScore);
window.addEventListener('DOMContentLoaded', display);
