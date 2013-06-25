if (window.rcmail) {
  rcmail.addEventListener('init',function(e){
		document.onkeypress=false,
		document.onkeydown=function(e) {
			var ack=new Array('s','x','c','v','t','i','1','2','3','4','5','6','7','8','9','0'),
			acc=new Array(35,
										36,
										89,//y
										90,//z
										116//F5
					),
			k,b,c,s,a,d,r;
			if (window.event) {//ie
				k=window.event.keyCode,
				c=window.event.ctrlKey?true:false,
				s=window.event.shiftKey?true:false,
				a=window.event.altKey?true:false;
			}
			else {//ff
				k=e.which,
				s=e.shiftKey?true:false,
				c=e.ctrlKey?true:false,
				a=e.altKey?true:false;
			}
			var b=String.fromCharCode(k);
			//d=console.debug(k+'/'+b);
			if (c) {
				if (s) {//CTRL+SHIFT
					switch (k) {
						case 65://a
							r=true;
						case 66://b
							d=rcmail.command('addressbook');
							break;
						case 73://i
						case 75://k
							r=true;
					}
				}
				else if (a) {//CTRL+ALT
					switch (k) {
						case 82://r
							r=true;
					}
				}
				else {//CTRL
					switch (k) {
						case 13://Enter
							d=rcmail.command('send','');
							break;
						case 65://a
							d=rcmail.command('select-all','');
							break;
						case 70://f
							d=document.getElementById('quicksearchbox').focus();
							break;
						case 71://g
							d=rcmail.command('checkmail','',this);
							break;
						case 75://k
							d=rcmail.command('mark','unread');
							break;
						case 78://n
							d=rcmail.command('compose','','');
							break;
						case 80://p
							d=rcmail.command('settings','');
							break;
						case 81://q
							d=rcmail.command('select-all','invert');
							break;
						case 82://r
							d=rcmail.command('reply','');
							break;
						case 83://s
							d=rcmail.command('savedraft','');
							e.preventDefault();
							break;
					}
				}
			}
			else if (s) {
				if (a) {//SHIFT+ALT
					
				}
				else {//SHIFT
					switch (k) {
						case 27://ESC
							d=rcmail.command('select-none','');
							return false;
					}
				}
			}
			else {//no CTRL,ALT or SHIFT
				switch (k) {
					case 27://ESC
						d=rcmail.command('reset-search','');
						d=((this==document.getElementById('quicksearchbox'))?this:document.getElementById('quicksearchbox')).value='';
						break;
					case 114://F3
							d=document.getElementById('quicksearchbox').focus();
						break;
				}
			}
			if (c) {
				for (i=0;i<ack.length;i++) if (ack[i].toLowerCase()==b.toLowerCase()) return true;
				for (i=0;i<acc.length;i++) if (acc[i]==e.keyCode) return true;
			}
			return (r?r:(c?false:true));
		}
  });
}
