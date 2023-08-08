document.getElementById("form").addEventListener("submit", mobileDataFunc);

var mobileDataArr = JSON.parse(localStorage.getItem("mobile_data")) || [];

function fileData(b, n, p, i) {
  this.Brand = b;
  this.Name = n;
  this.Price = p;
  this.Image_url = i;
}

function mobileDataFunc(event) {
  event.preventDefault();

  let Brand = form.mobile_brand.value;
  let Name = form.mobile_name.value;
  let Price = form.mobile_price.value;
  let Image_url = form.mobile_image.value;

  let Data = new fileData(Brand, Name, Price, Image_url);

  mobileDataArr.push(Data);
  localStorage.setItem("mobile_data", JSON.stringify(mobileDataArr));
  //   console.log(mobileDataArr);
  window.location.reload();
}
