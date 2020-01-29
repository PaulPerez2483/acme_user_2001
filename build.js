const api = "https://acme-users-api-rev.herokuapp.com/api/users";

const renderData = (data) => {
	fetch(data)
		.then((response) => response.json())
		.then((user) => {
			renderHtml(user);
		});
};
renderData(api);

const renderHtml = (data) => {
	console.log(data);
	const ul = document.getElementById("user_holder");
	const { users, count } = data;
	linksCount(count);
	let html = users
		.map((user) => {
			return `<li class="users"><span>${user.firstName}</span><span>${user.lastName}</span><span>${user.email}</span><span>${user.title}</span></li>`;
		})
		.join("");
	ul.innerHTML = html;
};

const linksCount = (num) => {
	const pages = document.getElementById("pages");
	let count = num / 50;
	let countArr = [];
	for (let i = 0; i < count; i++) {
		let currentNum = i + 1;
		countArr.push(`<li class="a_links"><a href="#${i}">${currentNum}</a></li>`);
	}
	pages.innerHTML = countArr.join("");
};

window.addEventListener("hashchange", (e) => {
	console.log(e.target);
	const id = window.location.hash.slice(1);
	const ul = document.getElementById("user_holder");
	fetch(`${api}/${id}`)
		.then((response) => response.json())
		.then((data) => {
			const { users } = data;
			let html = users
				.map((user) => {
					return `<li class="users"><span>${user.firstName}</span><span>${user.lastName}</span><span>${user.email}</span><span>${user.title}</span></li>`;
				})
				.join("");
			ul.innerHTML = html;
		});
});
const id = window.location.hash.slice(1);
console.log(id);
if (id) {
	const ul = document.getElementById("user_holder");
	fetch(`${api}/${id}`)
		.then((response) => response.json())
		.then((data) => {
			const { users } = data;
			let html = users
				.map((user) => {
					return `<li class="users"><span>${user.firstName}</span><span>${user.lastName}</span><span>${user.email}</span><span>${user.title}</span></li>`;
				})
				.join("");
			ul.innerHTML = html;
		});
}
