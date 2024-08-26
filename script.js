// Script for pixelated-menu-reveal

const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const gridContainer = document.getElementById('grid-container');
const menuItems = document.getElementById('menu-items');

openBtn.addEventListener('click', () => {
    openBtn.style.display = 'none'; // Hide the open button
    closeBtn.style.display = 'block'; // Show the close button
    gridContainer.style.display = 'grid'; // Show the grid container
    menuItems.style.display = 'flex'; // Show the menu items
    createGrid(); // Create the grid when the menu opens
});

closeBtn.addEventListener('click', () => {
    closeBtn.style.display = 'none'; // Hide the close button
    openBtn.style.display = 'block'; // Show the open button
    gridContainer.style.display = 'none'; // Hide the grid container
    menuItems.style.display = 'none'; // Hide the menu items
});

function createGrid() {
    gridContainer.innerHTML = '';

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const squareSize = Math.floor(viewportHeight / 8); // Use floor to avoid fractional sizes
    const numCol = Math.ceil(viewportWidth / squareSize); // Ensure columns fill the width
    const numRow = Math.floor(viewportHeight / squareSize);
    const totalSquare = numCol * numRow;

    gridContainer.style.gridTemplateColumns = `repeat(${numCol}, 1fr)`; // Fill available space
    gridContainer.style.gridTemplateRows = `repeat(${numRow}, ${squareSize}px)`;

    for (let i = 0; i < totalSquare; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.height = `${squareSize}px`;
        gridContainer.appendChild(gridItem);
    }

    setDefaultGreen(numCol, numRow);
    turn2DGridLightGreen(numCol, numRow);
}

function setDefaultGreen(numCol, numRow) {
    const gridItems = document.querySelectorAll('.grid-item');
    const lightGreen = '#77D84B'; // Light Green
    
    const colStart = Math.floor(numCol * 0.5); // 50% of the right side columns
    const colEnd = numCol;
    const rowStart = Math.floor(numRow * 0.25); // Middle 50% rows
    const rowEnd = rowStart + Math.ceil(numRow * 0.50); // Including the middle 50% rows
    
    for (let row = rowStart; row < rowEnd; row++) {
        for (let col = colStart; col < colEnd; col++) {
            const index = row * numCol + col;
            if (index < gridItems.length) {
                gridItems[index].classList.add('green');
            }
        }
    }
}

function turn2DGridLightGreen(numCol, numRow) {
    const gridItems = document.querySelectorAll('.grid-item');
    const lightGreen = '#77D84B'; // Light Green
    const quarterWidth = Math.ceil(numCol / 4); // Columns divided into quarters
    const thirdHeight = Math.ceil(numRow / 3); // Rows divided into thirds

    const intervals = [200, 175, 150, 125];
    const quarters = [];

    for (let q = 0; q < 4; q++) {
        for (let r = 0; r < 3; r++) {
            const sectionItems = [];
            for (let row = r * thirdHeight; row < Math.min((r + 1) * thirdHeight, numRow); row++) {
                for (let col = q * quarterWidth; col < Math.min((q + 1) * quarterWidth, numCol); col++) {
                    const index = row * numCol + col;
                    if (index < gridItems.length) {
                        sectionItems.push(gridItems[index]);
                    }
                }
            }
            quarters.push({ items: sectionItems, speed: intervals[q] });
        }
    }

    function changeSectionColors(items, speed) {
        const interval = setInterval(() => {
            if (items.length > 0) {
                const randomIndex = Math.floor(Math.random() * items.length);
                items[randomIndex].style.backgroundColor = lightGreen;
                items.splice(randomIndex, 1); // Remove the changed item from the array
            } else {
                clearInterval(interval); // Stop when all are light green
            }
        }, speed);
    }

    quarters.forEach((quarter) => {
        changeSectionColors(quarter.items, quarter.speed);
    });
}

window.addEventListener('resize', createGrid); // Recreate the grid on window resize