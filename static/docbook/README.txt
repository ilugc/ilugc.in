A presentation to introduce DocBook for documentation on the GNU/Linux desktop

To build it get the software package from
https://sourceforge.net/projects/docbook/files/slides/3.4.0/
and uncompress it in the current directory.

Install libxml2 or the subpackage that provides xsltproc, it is
likely already packaged in your distribution, but the source is
also available at https://gitlab.gnome.org/GNOME/libxml2/-/releases

Then run
xsltproc  docbook-slides-3.4.0/xsl/html/frames.xsl   presentation.xml

This will generate the presentation in html format.

Open `frames.html` in a web browser to view the presentation.
