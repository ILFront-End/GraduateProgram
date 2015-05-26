<!--

    @require "/static/lib/jquery-1.11.2.min.js"
    @require "/static/admin/operate/left/menuMessage.css"
-->

<div class="menu-message">
	<form action="" method="get">
		<div>
			<label for="menu_name">菜单名：</label>
			<input type="text" value="" placeholder="汉字，字母，数字的组合" id="menu_name"/>
		</div>
		<div>
			<input type="text" value="" id="belong_to" hidden/>
		</div>
		<div>
			<input type="text" value="" id="menu_rank" hidden/>
		</div>

		
		<p class="errortis"></p>
	</form>
</div>