<?php
/* by hkr */
class all_folder_search extends rcube_plugin {
	public $task = 'mail';
	function init() {
		//$this->add_hook('startup', array($this, 'startup'));
		$this->include_script('hkr_kbshortcuts.js');
	}
}
?>
