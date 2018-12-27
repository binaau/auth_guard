--Puna cdo dite fillohet me git pull dhe mbyllet me git commit + git push

--Git flow               
	Master nuk preket. Master eshte release dhe vendoset tag per cdo release.               
	Develop eshte branch nga master dhe punohet aty.               
	Askush nuk ben commit ne master dhe develop.               
	Te gjithe bejne branch nga develop.               
	Zhvillojne feature dhe bejne merge request tek develop.               
	Pasi punohet per nje fare kohe tek develop dhe vjen koha per release, krijohet nje branch release......               
	Develop nuk pranon me merge request dhe te gjithe perqendrohen tek branch release per te qene stable.               
	Pasi eshte stabel behet merge me master, krijohet tag dhe nxirret versioni.               
	Ne kete pike master behet merge me develop dhe vazhdohet.               
               
--Cdo commit duhet te jete vetem per nje feature te shtuar ose nje bug fix.               
               
--Kodi duhet te jete i komentuar               
               
--Cdo funksion duhet te kete ne krye shpjegim per punen qe ben dhe shpjegim per parametrat qe merr dhe kthen.               
               
--Te kuptohet mire Git flow me siper.               
               
--ToDo mund te jene neper kod por pelqehet me shume qe te perdoren issues ose ToDo te platformes (gitlab).               
               
--Udhezime GIT               
---Shkarko dhe instalo GIT https://git-scm.com/downloads               
---Si fillim konfigurohet GIT me te dhenat personale               
	git config --global user.name "Emer Mbiemer"              
	git config --global user.email "emer.mbiemer@email.com"               
               
	nese zhvillon ne windows               
	git config --global core.autocrlf true               
	
	nese zhvillon ne linux               
	git config --global core.autocrlf input               
               
	Arsyeja eshte               
	 https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#Formatting-and-Whitespace               
---Per te filluar pune per here te pare               
	git clone https://gitlab.com/gjergjiramku/SecuritySystemBackEnd.git               
---ose per te filluar nga develop qe eshte me e zakonshme               
	git clone -b develop https://gitlab.com/gjergjiramku/SecuritySystemBackEnd.git               
---krijo branch new_branch               
	git branch new_branch               
---kalojme tek branch i ri               
	git checkout new_branch	               
---puno dhe pastaj commit               
	git add .   -- track te gjithe file               
    git commit -m "U shtua feature i papare" -- Commit lokalisht               
---deri tani new_branch eshte vetem lokalisht, pas nje ose me shume commit shtojme new_branch ne server               
	git push --set-upstream origin test               
---Kalon ne gitlab dhe krijon nje merge request duke zgjedhur si source new_branch dhe target develop               
---Pastaj pas cdo ndryshimi ne kod               
   git add .   -- track te gjithe file               
   git commit -m "U shtua feature i papare" -- Commit lokalisht               
   git push origin new_branch --kalon te gjitha ndryshimet ne server por tek branch new_branch qe krijuam me pare               
---cdo issue i zgjidhur duhet te kete nje commit, tek mesazhi i commit duhet te permendi edhe numrin e issue(#20)          
---cdo commit nje push          
---cdo fillim pune nis me nje pull, kontrollohet se cfare ka ndrusuar tek branchet e tjere dhe sipas rastit behet merge me branchin ku po punohet