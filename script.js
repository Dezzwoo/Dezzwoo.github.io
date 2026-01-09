const characters = [
  {
    name: "Jin Kazama",
    image: "images/jin.png",
    story: "Jin Kazama is the main protagonist of Tekken. Born with the Devil Gene, he fights to control the darkness within him."
  },
  {
    name: "Kazuya Mishima",
    image: "images/kazuya.jpg",
    story: "Kazuya Mishima is driven by vengeance and power, embracing the Devil Gene to dominate his enemies."
  },
  {
    name: "Jun Kazama",
    image: "images/jun.webp",
    story: "Jun Kazama is a spiritual fighter who seeks to cleanse the Devil Gene rather than destroy it."
  },
  {
    name: "Asuka Kazama",
    image: "images/asuka.jpg",
    story: "Asuka Kazama is a strong-willed martial artist with spiritual powers. Though often carefree, she has a deep sense of justice and a fierce rivalry with Lili."
  },
  {
    name: "King",
    image: "images/king.jpg",
    story: "King is a masked luchador who fights to protect orphans and uphold justice."
  },
  {
    name: "Hwoarang",
    image: "images/hwoarang.jpg",
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
