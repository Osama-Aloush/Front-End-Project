// Engine descriptions
const engineDescriptions = {
    unity: {
            title: "Unity",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/1200px-Unity_Technologies_logo.svg.png",
            description: "Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Worldwide Developers Conference as a Mac OS X game engine. The engine has since been gradually extended to support a variety of desktop, mobile, console, augmented reality, and virtual reality platforms. It is particularly popular for iOS and Android mobile game development, is considered easy to use for beginner developers, and is popular for indie game development.The engine can be used to create three-dimensional (3D) and two-dimensional (2D) games, as well as interactive simulations. The engine has been adopted by industries outside video gaming, such as film, automotive, architecture, engineering, construction, and the United States Armed Forces."
        },
        unreal: {
            title: "Unreal Engine",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Unreal_Engine_Logo.svg",
            description: "Unreal Engine (UE) is a series of 3D computer graphics game engines developed by Epic Games, first showcased in the 1998 first-person shooter video game Unreal. Initially developed for PC first-person shooters, it has since been used in a variety of genres of games and has been adopted by other industries, most notably the film and television industry. Unreal Engine is written in C++ and features a high degree of portability, supporting a wide range of desktop, mobile, console, and virtual reality platforms."
        },
        godot: {
            title: "Godot",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg",
            description: "Godot is a cross-platform, free and open-source game engine released under the permissive MIT license. It was initially developed by Argentine software developers Juan Linietsky and Ariel Manzur for several companies in Latin America prior to its public release in 2014.The development environment runs on many platforms, and can export to several more. It is designed to create both 2D and 3D games targeting PC, mobile, and web platforms and can also be used to develop non-game software, including editors."
        }
    };
// Button elements
const unityBtn = document.getElementById('unity-btn');
    const unrealBtn = document.getElementById('unreal-btn');
    const godotBtn = document.getElementById('godot-btn');

    // Div element to display engine info
    const engineInfoDiv = document.getElementById('engine-info');

    // Event listeners for button clicks
    unityBtn.addEventListener('click', () => displayEngineInfo('unity'));
    unrealBtn.addEventListener('click', () => displayEngineInfo('unreal'));
    godotBtn.addEventListener('click', () => displayEngineInfo('godot'));

// Function to display engine info
function displayEngineInfo(engine) {
        const { title, image, description } = engineDescriptions[engine];

        // Create HTML elements for engine info
        const engineTitle = document.createElement('h3');
        engineTitle.textContent = title;
        engineTitle.classList.add('engine-title');

        const engineImage = document.createElement('img');
        engineImage.src = image;
        engineImage.alt = `${title} Icon`;
        engineImage.style.width = '300px'; // Set width for the image
        engineImage.classList.add('engine-image');

        const engineDescription = document.createElement('p');
        engineDescription.textContent = description;
        engineDescription.classList.add('engine-description');

        // Clear previous content and append new content
        engineInfoDiv.innerHTML = '';
        engineInfoDiv.appendChild(engineTitle);
        engineInfoDiv.appendChild(engineImage);
        engineInfoDiv.appendChild(engineDescription);
    }
