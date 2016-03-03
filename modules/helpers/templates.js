var templates = {
	home: `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Node server</title>
			<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" >
		</head>
		<body background="http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/honey_im_subtle.png">
			<div class="container">
				<h1 class="text-center text-success">Node js homework</h1>
		<nav>
			<ul class="nav nav-tabs">
				<li role="presentation" class="active"><a href="/" >Last image</a></li>
				<li role="presentation"><a href="/post">Upload Image</a></li>
				<li role="presentation"><a ui-sref="/list">List of images</a></li>
				<li role="presentation"><a ui-sref="/secr">Secret image</a></li>
			</ul>
			<h3 class="text-center text-success">Here is last uploaded image:</h3>
			<img src="/last" class="text-center" style="margin: 20px auto; display: block; max-width: 960px;">
		</nav>
			</div>
		</body>
		</html>
	`,
	form: `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Node server</title>
			<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" >
		</head>
		<body background="http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/honey_im_subtle.png">
			<div class="container">
				<h1 class="text-center text-success">Node js homework</h1>
		<nav>
			<ul class="nav nav-tabs">
				<li role="presentation"><a href="/" >Last image</a></li>
				<li role="presentation" class="active"><a href="/post">Upload Image</a></li>
				<li role="presentation"><a href="/list">List of images</a></li>
				<li role="presentation"><a href="/secr">Secret image</a></li>
			</ul>
				<h3 class="text-center text-success">Load your image here</h3>
				<form action="/upload" method="post" enctype="multipart/form-data" style="width: 600px; margin: 10px auto">
					<div class="form-group">
						<label for="exampleInputFile">File input</label>
						<input type="file" name="upload" required>
					</div>
					<button type="submit" class="btn btn-success">Submit</button>
				</form>
			</div>
		</body>
		</html>
	`,
	uploadSuccess: `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Node server</title>
			<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" >
		</head>
		<body background="http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/honey_im_subtle.png">
			<div class="container">
				<h1 class="text-center text-success">Node js homework</h1>
		<nav>
			<ul class="nav nav-tabs">
				<li role="presentation"><a href="/" >Last image</a></li>
				<li role="presentation"><a href="/post">Upload Image</a></li>
				<li role="presentation"><a href="/list">List of images</a></li>
				<li role="presentation"><a href="/secr">Secret image</a></li>
			</ul>
				<h3 class="text-center text-success">Your file was succesfully loaded</h3>
				<a href="/post" class="btn btn-success" style="margin: auto; display: block; width: 100px;">Back to form</a>
				</form>
			</div>
		</body>
		</html>
	`,
	secr: `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Node server</title>
			<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" >
		</head>
		<body background="http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/honey_im_subtle.png">
			<div class="container">
				<h1 class="text-center text-success">Node js homework</h1>
		<nav>
			<ul class="nav nav-tabs">
				<li role="presentation"><a href="/" >Last image</a></li>
				<li role="presentation"><a href="/post">Upload Image</a></li>
				<li role="presentation"><a href="/list">List of images</a></li>
				<li role="presentation" class="active"><a href="/secr">Secret image</a></li>
			</ul>
				<h3 class="text-center text-success">To see the secret image</h3>
				<form action="/secret" method="get" enctype="multipart/form-data" style="width: 600px; margin: 10px auto">
					<div class="form-group">
						<label for="pass">Password</label>
						<input type="password" class="form-control" id="pass" placeholder="Password" name="password" required>
					</div>
					<button type="submit" class="btn btn-success">Submit</button>
				</form>
			</div>
		</body>
		</html>
	`,
	wrongPassword: `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Node server</title>
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" >
	</head>
	<body background="http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/honey_im_subtle.png">
		<div class="container">
			<h1 class="text-center text-success">Node js homework</h1>
	<nav>
		<ul class="nav nav-tabs">
			<li role="presentation"><a href="/" >Last image</a></li>
			<li role="presentation"><a href="/post">Upload Image</a></li>
			<li role="presentation"><a href="/list">List of images</a></li>
			<li role="presentation"><a href="/secr">Secret image</a></li>
		</ul>
			<h3 class="text-center text-danger">403 Forbidden</h3>
			<h4 class="text-center text-danger">Wrong password!</h4>
			<img src="http://t1.ftcdn.net/jpg/00/06/98/02/400_F_6980237_tyN359tU9Ba70VNP0QNzPQTex5fpJR23.jpg" style="margin: 20px auto; display: block;" alt="wrong pass">
			<a href="/secr" class="btn btn-danger" style="margin: auto; display: block; width: 100px;">Back to form</a>
			</form>
		</div>
	</body>
	</html>
	`,
	imgList: list => `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Node server</title>
			<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" >
			<style type="text/css">
				img{
					display: block;
					max-height: 200px; 
				}
			</style>
		</head>
		<body background="http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/honey_im_subtle.png">
			<div class="container">
				<h1 class="text-center text-success">Node js homework</h1>
		<nav>
			<ul class="nav nav-tabs">
				<li role="presentation"><a href="/" >Last image</a></li>
				<li role="presentation"><a href="/post">Upload Image</a></li>
				<li role="presentation" class="active"><a href="/list">List of images</a></li>
				<li role="presentation"><a href="/secr">Secret image</a></li>
			</ul>
				<h3 class="text-center text-success">List of downloaded images</h3>
				<ul>
				${list}
				</ul>
			</div>
			<script>
			document.addEventListener('click', function(event){
				if (event.target.tagName === 'A' && event.target.getAttribute('href').indexOf('img_download/') === 0){
					event.preventDefault();
					deleteAll('img');
					var src = event.target.getAttribute('href');
					var img = new Image();
					img.src = src;
					insertAfter(event.target, img);
				}

			});

			function deleteAll(selector){
				var elems = document.getElementsByTagName(selector);
				console.log(elems);
				for (var i = 0; i < elems.length; i++){
					var xx = elems[i].parentNode.removeChild(elems[i]);
					console.log('xx = ' + xx);
				}

			}

			function insertAfter(el1, el2){
				el1.parentNode.insertBefore(el2, el1.nextSibling);
			}
			</script>
		</body>
		</html>
	`
}

module.exports = templates;
