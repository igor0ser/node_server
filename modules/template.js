var template = {
	form: `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Form for image downloading</title>
			<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" >
			<style type="text/css">
				form {
					margin: 20px;
				}
			</style>
		</head>
		<body style="background: url('http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/ignasi_pattern_s.png')"
		>
			<div class="container">
				<h3 class="text-warning">Form for image downloading</h3>
				<form action="/upload" method="post" enctype="multipart/form-data" style="margin-bottom: 20px">
					<div class="form-group">
						<label for="exampleInputFile">File input</label>
						<input type="file" name="upload" required>
					</div>
					<button type="submit" class="btn btn-success">Submit</button>
				</form>
				<h3 class="text-warning">To see the secret image</h3>
				<form action="/secret" method="get" style="margin-bottom: 20px">
					<div class="form-group">
						<label for="exampleInputPassword1">Password</label>
						<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" required>
					</div>
					<button type="submit" class="btn btn-success">Submit</button>
				</form>
				<a href="http://localhost:3000/"><h3>Go to the last loaded image</h3></a>
				<a href="http://localhost:3000/list"><h3>Go to the list of loaded images</h3></a>
			</div>
		</body>
		</html>
	`,
	uploadSuccess: `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Form for image downloading</title>
			<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" >
		</head>
		<body style="background: url('http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/ignasi_pattern_s.png')"
		>
			<div class="container">
				<h1>Your file was succesfully loaded</h1>
				<a href="http://localhost:3000/"><h3>Go to the last loaded image<h3></a>
				<br />
				<a href="http://localhost:3000/post"><h3>Go to the form<h3></a>
				<a href="http://localhost:3000/list"><h3>Go to the list of loaded images</h3></a>
			</div>
		</body>
		</html>
	`,
	wrongPassword: `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Form for image downloading</title>
			<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" >
		</head>
		<body style="background: url('http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/ignasi_pattern_s.png')"
		>
			<div class="container">
				<h1 class="text-danger">Wrong password</h1></td>
				<a href="http://localhost:3000/post"><h3>Go back to the form<h3></a>
				<a href="http://localhost:3000/list"><h3>Go to the list of loaded images</h3></a>
			</div>
		</body>
		</html>
	`,
	imgList: list => `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Form for image downloading</title>
			<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" >
		</head>
		<body style="background: url('http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/ignasi_pattern_s.png')"
		>
			<div class="container">
				<h3 class="text-warning">List of downloaded images</h3>
				<ul>
				${list}
				</ul>
				<a href="http://localhost:3000/post"><h3>Go back to the form</h3></a>
				<a href="http://localhost:3000/"><h3>Go to the last loaded image</h3></a>
			</div>
		</body>
		</html>
	`
}

module.exports = template;
