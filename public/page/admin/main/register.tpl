<!-- 
	
    @require "/static/admin/main/register.css"
    @require "/static/admin/main/register.js"

 -->

<div class="register-wrap">
	<div id="register">
		<div class="head">
			<a href="javascript:;" class="close"></a>
			<h2>注册</h2>
			<p>请填写以下类容</p>
		</div>
		<div class="content">
			<form id="registerForm" action="" method="get">
				<div>
					<p><span>用户名：</span></p>
					<p><input type="text" id="username" placeholder="英文或数字"/></p>
				</div>
				<div>
					<p><span>密码：</span></p>
					<p><input type="password" id="psw"  placeholder="英文或数字"/></p>
				</div>
				<div>
					<p><span>确认密码：</span></p>
					<p><input type="password" id="rpsw"  placeholder="英文或数字"/></p>
				</div>
				<div style="padding: 10px 0 0;">
					<p><a href="javascript:;"  class="register-btn able">注册</a></p>
				</div>
			</form>
			<div class="tips">
				<p></p>
			</div>
		</div>
	</div>
</div>