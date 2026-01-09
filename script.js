const characters = [
  {
    name: "Jin Kazama",
    image: "jin.png",
    story: "Jin Kazama is the main protagonist of Tekken. Born with the Devil Gene, he fights to control the darkness within him."
  },
  {
    name: "Kazuya Mishima",
    image: "kazuya.png",
    story: "Kazuya Mishima is driven by vengeance and power, embracing the Devil Gene to dominate his enemies."
  },
  {
    name: "Jun Kazama",
    image: "jun.png",
    story: "Jun Kazama is a spiritual fighter who seeks to cleanse the Devil Gene rather than destroy it."
  },
  {
    name: "Asuka Kazama",
    image: "asuka.png",
    story: "Asuka Kazama is a strong-willed martial artist with spiritual powers and a fierce rivalry with Lili."
  },
  {
    name: "King",
    image: "king.png",
    story: "King is a masked luchador who fights to protect orphans and uphold justice."
  },
  {
    name: "Hwoarang",
    image: "hwoarang.png",
    story: "Hwoarang is a Taekwondo master and Jin Kazama’s rival, driven by pride and honor."
  }
];



const container = document.getElementById("characters");
const modal = new bootstrap.Modal(document.getElementById("characterModal"));

characters.forEach((char, index) => {
  const card = document.createElement("div");
  card.className = "col-lg-3 col-md-4 col-sm-6 mb-4";

  card.innerHTML = `
    <div class="card text-center h-100">
      <img src="${char.image}" class="card-img-top" alt="${char.name}">
      <div class="card-body">
        <h5 class="card-title fw-bold">${char.name}</h5>
      </div>
    </div>
  `;

  card.onclick = () => {
    document.getElementById("modalTitle").textContent = char.name;
    document.getElementById("modalImage").src = char.image;
    document.getElementById("modalText").textContent = char.story;
    modal.show();
  };

  container.appendChild(card);
});

