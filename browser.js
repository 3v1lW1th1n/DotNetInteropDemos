//    This file is part of DotNetInteropDemos
//    Copyright (C) James Forshaw 2017
//
//    DotNetInteropDemos is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    DotNetInteropDemos is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License
//    along with DotNetInteropDemos.  If not, see <http://www.gnu.org/licenses/>.

try {
	var ax = new ActiveXObject("Microsoft.Windows.ActCtx");
	ax.Manifest = "forms.manifest";
	var obj = ax.CreateObject("System.Windows.Forms.Form");
 	obj.Text = "Hello Derbycon!";
	var browser = ax.CreateObject("System.Windows.Forms.WebBrowser");
	browser.Parent = obj;
	browser.Navigate_2("https://www.google.com/");
	browser.Dock = 5;
	obj.ShowDialog();
} catch(e) {
	WScript.Echo("Error: " + e.message);
}