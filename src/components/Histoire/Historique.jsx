import React from "react";
import './Historique.css';

const Historique = () => {
  return (
    <div className="historique-page">
      {/* Sommaire */}
      <aside className="historique-sidebar">
        <h3>Sommaire</h3>
        <ul>
          <li>
            <a href="#histoire-somali">Histoire Somali</a>
            <ul className="historique-submenu">
              <li><a href="#soomaalida-hore">Soomaalida Hore</a></li>
              <li><a href="#diimaha-isbedelada">Diimaha iyo Isbedelada</a></li>
              <li><a href="#boqortooyooyinka-hore">Boqortooyooyinka Hore</a></li>
            </ul>
          </li>
          <li>
            <a href="#histoire-ciise">Histoire de Ciise</a>
            <ul className="historique-submenu">
              <li><a href="#asalka-sooyaalka">Asalka iyo Sooyaalka Ciisaha</a></li>
              <li><a href="#dhaqanka-habnololeedka">Dhaqanka iyo Hab-nololeedka Ciisaha</a></li>
              <li><a href="#halyeeyada-halganka">Halyeeyada iyo Halganka Taariikheed</a></li>
            </ul>
          </li>
          <li>
            <a href="#histoire-xeer">Histoire de Xeer Ciise</a>
            <ul className="historique-submenu">
              <li><a href="#marxaladihii-hore">Marxaladihii Hore ee Xeerka</a></li>
              <li><a href="#xilligii-dhexe">Xilligii Dhexe</a></li>
              <li><a href="#xilligii-gumeysiga">Xilligii Gumeysiga</a></li>
              <li><a href="#casriga">Casriga</a></li>
            </ul>
          </li>
        </ul>
      </aside>

      {/* Contenu principal */}
      <div className="historique-content">
        <nav className="title" > 
        <h2>Historique</h2>
        </nav>
       

        <section id="histoire-somali" className="histoire-section">
          <h3>Histoire Somali</h3>
        
          <h1 id="soomaalida-hore">1. Soomaalida Hore</h1>
<p>
Asalka Soomaalida: Waxaa la rumeysan yahay in Soomaalida ay ka soo farcameen qowmiyadaha Kushitik ee ka 
soo jeeda woqooyiga-bari Afrika. Meelaha taariikhda Soomaalida hore looga hadlo waxaa ka mid ah bariga
 Itoobiya iyo dhulka ku dhow webiyada Jubba iyo Shabeelle.
</p>
<p>
Hab-nololeedka: Soomaalida hore waxay ahaayeen xoolo-dhaqato (geel, ari, iyo lo'), reer guuraa ku noolaa dhul
 hawd iyo ooman ah. Waxa kale oo ay caan ku ahaayeen xirfadda kalluumaysiga ee xeebaha dheer.
</p>

<h1 id="diimaha-isbedelada" >2. Diimaha iyo Isbedelada Dhaqanka</h1>
<p>
Diinta Islaamka: Diinta Islaamka ayaa timid qarnigii 7aad, markii ay ganacsatada Carabtu yimaadeen xeebaha Soomaaliya,
 sida magaalada Saylac iyo Berbera. Soomaalida waxay ahaayeen dadkii ugu horreeyey ee diinta Islaamka qaata Geeska Afrika.
</p>
<p>
Ganacsiga: Soomaaliya waxay ahayd xarun muhiim ah oo ganacsi, waxaana xeebaha Soomaaliya lagu kala bedelan jiray badeecado
 ay ka mid yihiin faaras, dhuxul, iyo malab.
</p>

<h1 id="boqortooyooyinka-hore">3. Boqortooyooyinkii Hore</h1>
<p>
Ajuuraan (13aad–17aad): Waxay ahayd boqortooyo muslim ah oo xoog badan, kana talin jirtay bartamaha Soomaaliya. Waxay dhistay
 kanaalo waaweyn oo waraabka xoolaha iyo beeraleyda u adeegayey.
</p>
<p>
Boqortooyada Geledi (18aad–19aad): Waxay ku taalay Bay iyo Bakool, waxayna u badneyd Soomaali la isku keeno si looga hortago 
gumeysi ka yimid gudaha iyo dibadda.
</p>
<p>
Saldanado Kale: Waxaa ka mid ahaa Saldanadda Warsangeli iyo Saldanadda Majerteen oo waqooyiga Soomaaliya ka jiray.
</p>

<h1>4. Gumeysiga iyo Isqabsiga</h1>
<p>
Kala Qeybsigii Soomaaliya: Gumeysigii reer Yurub wuxuu qaybiyey Soomaaliya qarnigii 19aad:
</p>
<ul>
<li>Britain: Waqooyi (Somaliland British Protectorate).</li>
<li>Talyaaniga: Koonfur (Somalia Italiana).</li>
<li>Faransiiska: Djibouti (French Somaliland).</li>
</ul>
<p>
Daraawiishta: Sayid Maxamed Cabdulle Xasan wuxuu hoggaaminayey halganka Daraawiishta oo muddo 20 sano ah 
ka dhigay gumeysiga Ingiriiska mid ku dhibban dhulka Soomaalida.
</p>

<h1>5. Madaxbannaanida</h1>
<p>
Xorriyaddii 1960: Soomaaliya waxay xornimada ka qaadatay:
</p>
<ul>
<li>26-ka Juun 1960 (Waqooyiga Britain).</li>
<li>1-da Luulyo 1960 (Koonfurta Talyaaniga).</li>
</ul>
<p>
Dawladdii Dimoqraadiga ahayd: Cabdirashiid Cali Sharmaarke wuxuu noqday madaxweynihii labaad ee Soomaaliya. Waxaa jiray 
dimoqraadiyad illaa 1969.
</p>

<h1>6. Isbeddelkii Siyaasadeed</h1>
<p>
Kacaankii 1969: Maxamed Siyaad Barre ayaa afgambi ku qabsaday xukunka. Dowladiisii waxay ku dhaqaaqday hantiwadaag, 
iyadoo bulshada lagu baray farta Soomaaliga.
</p>
<p>
Dhibaatooyinka Kacaanka: In kasta oo ay jireen horumarro, kacaankii wuxuu ku dhacay musuqmaasuq, cadaadis, iyo kala-qaybin bulsho.
</p>

<h1>7. Burburka Dowladnimada</h1>
<p>
1991–Hadda: Dowladdii dhexe ayaa burburtay, waxaana dalka galay dagaal sokeeye. Waxaa abuurtay qab-qablayaal iyo qabaa'il isdiidan.
</p>
<p>
Kala qaybsanaanta Soomaaliya: Somaliland waxay ku dhawaaqday madax-bannaani, halka Koonfurta iyo bartamaha ay ku jireen dagaal sokeeye.
</p>

<h1>8. Dadaallada Dib-u-dhiska</h1>
<p>
Nidaamka Federaalka: Soomaaliya waxay qaadatay nidaamka federaalka si loo mideeyo maamullada sida Puntland, Jubbaland,
 Galmudug, Hirshabelle, iyo Koonfur-Galbeed.
</p>
<p>
Dib-u-dhiska Dowladnimo: Dadaallada AMISOM iyo beesha caalamka ayaa ku lug leh dib-u-dhiska dowladnimo.
</p>

          
         
         
        </section>

        <section id="histoire-ciise" className="histoire-section">
          <h3>Histoire de Ciise</h3>
          <h1 id="asalka-sooyaalka" >1. Asalka iyo Sooyaalka Ciisaha</h1>
<p>
Dir iyo Ciise: Ciisaha waxay ka tirsan yihiin waaxda Dir, oo ah mid ka mid ah jilibyada waaweyn ee Soomaalida. Dir wuxuu ka tirsan yahay Kushitik-ka waqooyi, kuwaas oo muddo dheer ku noolaa Geeska Afrika.
</p>
<p>
Degaanada Ciisaha:
<ul>
  <li><strong>Jabuuti:</strong> Ciisaha waa qabiilka ugu weyn ee Jabuuti, iyagoo degan gobollo badan oo muhiim ah, sida Ali Sabieh iyo Djibouti City.</li>
  <li><strong>Itoobiya:</strong> Deegaanka Soomaalida Itoobiya (qeybo ka mid ah gobollada Shinile iyo Diridhaba).</li>
  <li><strong>Soomaaliya:</strong> Gobollada Awdal iyo Salal, gaar ahaan magaalooyin muhiim ah sida Saylac, Lughaya, iyo Xariirad.</li>
</ul>
</p>
<p>
Asal Taariikheed: Waxaa jira sheekooyin isku dhafan oo tilmaamaya in Ciisaha ay ka yimaadeen dhulalka Kushitik-ka iyo Badda Cas ee waqooyiga.
</p>

<h1 id="dhaqanka-habnololeedka">2. Dhaqanka iyo Hab-nololeedka Ciisaha</h1>
<p>
Xoolo-dhaqashada:
<ul>
  <li>Geela waa xudunta dhaqanka Ciisaha; waxay ka samaystaan cunto, cabitaan (caano), iyo ganacsi.</li>
  <li>Waxay caan ku yihiin xirfadda geela la xiriirta, sida tababarka iyo dhaqashada noocyada kala duwan ee geela.</li>
</ul>
</p>
<p>
Bulsho Isku-xiran:
<ul>
  <li>Qoysaska iyo qabaa’ilka Ciisaha waa kuwo si weyn isu taageera, iyagoo ku dhaqma nidaam iscaawin iyo wadajir.</li>
  <li>Waxay leeyihiin nidaam xeer dhaqameed oo gaar ah oo lagu xaliyo murannada iyo khilaafaadka.</li>
</ul>
</p>
<p>
Afka iyo Suugaanta:
<ul>
  <li>Ciisaha waxay leeyihiin suugaan hodan ah, oo ay ku jirto gabay, hees, iyo sheekooyin taariikhi ah.</li>
  <li>Af-Soomaaliga ay ku hadlaan wuxuu hodan ku yahay ereyo iyo odhaahyo ka turjumaya nolosha xoolo-dhaqatada iyo deegaanka.</li>
</ul>
</p>

<h1 id="halyeeyada-halganka">3. Halyeeyada iyo Halganka Taariikheed</h1>
<p>
Dagaalka Gumaysiga:
<ul>
  <li>Faransiiska iyo Itoobiya waxay isku dayeen inay qabsadaan dhulka Ciisaha, laakiin dadka Ciisaha ayaa sameeyay halgan adag oo ay kaga difaacayeen dhulkooda.</li>
  <li>Magaalooyinka sida Saylac iyo Jabuuti waxay noqdeen xarumaha ganacsiga iyo halganka gobannimada.</li>
  <li><strong>Sayid Maxamed Cabdulle Xasan:</strong> Daraawiishta uu hoggaaminayay ayaa taageero ka helay qabaa’il badan oo Ciisaha ka mid ah xilligii gumaysiga Ingiriiska.</li>
</ul>
</p>

<h1>4. Xeerarka iyo Nidaamka Bulshada</h1>
<p>
Xeer Ciise:
<ul>
  <li>Xeerka Ciisaha waa nidaam dhaqameed aad u qoto dheer oo xeerinaya nolosha bulshada.</li>
  <li>Waxyaabaha uu xeerku xalliyo waxaa ka mid ah khilaafaadka qoyska, ganacsiga iyo dhul-milkiyada, iyo dhibaatooyinka ka dhex dhaca qabaa’ilka kale.</li>
</ul>
</p>
<p>
Guddi Dhaqameed:
<ul>
  <li>Waxaa jira odayaal dhaqameedyo loo yaqaan "Gurgurte" ama "Madaxdhaqameedka" kuwaas oo go’aamiya murannada waaweyn.</li>
</ul>
</p>

<h1>5. Doorka Jabuuti</h1>
<p>
Jabuuti iyo Ciisaha:
<ul>
  <li>Qabiilka Ciisaha ayaa hoggaan weyn ku lahaa xornimadii Jabuuti. Waxay ka soo horjeedeen gumaysigii Faransiiska iyagoo ka shaqeynayay sidii Jabuuti xor ugu noqon lahayd Soomaalida.</li>
  <li>Aqoonyahannada Ciisaha ee Jabuuti waxay door muhiim ah ku lahaayeen dhismaha dowladnimada casriga ah ee dalkaas.</li>
</ul>
</p>

<h1>6. Ganacsiga iyo Saamaynta Dhaqaalaha</h1>
<p>
Ganacsatada Ciisaha:
<ul>
  <li>Waxay si weyn ugu lug lahaayeen ganacsiga webiyada iyo dekedaha.</li>
  <li>Waxay ganacsi la yeesheen Carabta iyo Hindiya iyagoo soo iibsan jiray badeecado kala duwan oo ay ka mid yihiin dhuxusha, xoolaha, iyo faaraska.</li>
</ul>
</p>
<p>
Dekedaha Taariikhiga ah:
<ul>
  <li>Magaalooyinka Saylac iyo Lughaya waxay ka mid yihiin xarumaha ugu muhiimsan ee ganacsiga badda, taas oo sii xoojisay dhaqaalaha Ciisaha.</li>
</ul>
</p>

<h1>7. Doorashada Maanta iyo Mustaqbalka</h1>
<p>
Waxbarashada iyo Casriga:
<ul>
  <li>Inta badan dadka Ciisaha waxay ka faa'iideen nidaamyada waxbarashada ee Jabuuti iyo Soomaaliya.</li>
  <li>Waxay sidoo kale yeesheen ganacsiyo caalami ah oo xariir la leh ganacsatada Geeska Afrika iyo dunida kale.</li>
</ul>
</p>
<p>
Saamaynta Siyaasadda:
<ul>
  <li>Deegaanada ay ku nool yihiin Ciisaha waxay leeyihiin madax siyaasadeed iyo odayaal dhaqameed oo saamayn ku leh maamulka iyo siyaasadda gudaha.</li>
</ul>
</p>

<h1>Gunaanad</h1>
<p>
Dadka Ciisaha waa qoomiyad Soomaaliyeed oo leh taariikh fac weyn, dhaqammo hodan ah, iyo door muhiim ah oo ay ku leeyihiin gobolka Geeska Afrika.
</p>

          
          
        </section>

        <section id="histoire-xeer" className="histoire-section">
          <h3>Histoire de Xeer Ciise</h3>
        

          <p>
          
          Xeer Ciise waa xeer dhaqameed taariikhi ah oo saldhig u ah hab nololeedka iyo maamulka beesha Ciise.
           Waxaa la dejiyey boqolaal sano kahor, xilli bulshooyinka reer guuraaga ah ee Soomaalida ay ku tiirsanaayeen heshiisyo
            iyo xeerar dhaqameed si loo ilaaliyo wadajirka iyo caddaaladda bulshada. Aan faahfaahiyo taariikhda iyo marxaladihii
             uu soo maray xeerkan.

          </p>
          <h1 id="marxaladihii-hore">  1. Marxaladihii Hore ee Xeerka (Asalka Xeerka)</h1>
          <p>
                                
        Xeer Ciise wuxuu ka dhashay baahida loo qabo hab caddaaladeed oo lagu xakameeyo khilaafaadka iyo wada-noolaanshaha bulsho.
        Xilliyadii hore, bulshada Soomaalida waxay ku tiirsanaayeen nidaamyo dhaqameed oo lagu xalliyo murannada, iyadoo aan jirin dowlad dhexe.
        Beesha Ciise, oo ah beel soojireen ah oo ku fadhida dhul ballaaran, waxay abuurtay xeer gaar ah si ay u maareyso xiriirka gudaha iyo midka beelaha kale.
        Shirar waaweyn oo lagu magacaabi jiray “Gole” ayaa loo qabtay odayaasha iyo waayeelka beesha si ay u dejistaan qawaaniin waara.
        Xeerka waxaa markii ugu horreysay lagu ansixiyay shirar dhaqameed oo la rumeysan yahay inay dhaceen boqolaal sano ka hor,
         laakiin taariikh sax ah lama hayo sababtoo ah wuxuu ahaa xeer afka ah.


          </p>
          <h1 id="xilligii-dhexe"> 2. Xilligii Dhexe (Dhaqan-galka iyo Ballaarinta Xeerka)</h1>
          <p>
                     
        Xeer Ciise wuxuu noqday mid si rasmi ah uga dhex jira hab-nololeedka beesha oo dhan, isagoo diiradda saaray ilaalinta nabadda, 
        xiriirka beelaha, iyo xallinta khilaafaadka waaweyn sida:

          Dilal
          Dhac
          Dhul-daaqsin
          Khilaafaadka xoolaha.
          Heshiisyada Beesha Gudaha iyo Dibadda:
          Beesha Ciise waxay xiriir dhow la lahayd beelaha kale ee Soomaaliyeed iyo bulshooyinka deriska, sida Oromo iyo Afar. Xeer Ciise wuxuu door ka ciyaaray hagaajinta xiriirka deriska ah.

          Nabadgelyada iyo Mag-Bixinta:
          Magtu waxay ahayd halbeeg muhiim ah oo lagu xalliyo khilaafaadka. Waxay caadi ahaan ahayd 100 halaad (geel) oo loo bixiyo qof ama beel dhib loo geystay.


          </p>
          <h1 id="xilligii-gumeysiga"> 3. Xilligii Gumeysiga (Qarnigii 19aad–20aad)</h1>
          <p>
         
Gumeysiga reer Yurub, gaar ahaan Faransiiska ee Jabuuti iyo Itoobiya ee dhulka Soomaalida, 
wuxuu keenay isbeddelo cusub oo saamayn ku yeeshay xeerarka dhaqanka:

Faransiiska iyo Itoobiya:

Markii gumeysigii Faransiiska uu qabsaday Jabuuti qarnigii 19aad, waxay isku dayeen inay soo rogaan sharciyadooda, laakiin beesha Ciise waxay si adag u difaacday xeerkeeda dhaqanka.
Itoobiya, oo ku soo fidday dhulka Soomaalida, waxay isku dayday inay xakameyso dhaqanka, laakiin beesha Ciise ayaa xeerkeeda u ilaalisay si gaar ah.
Wada-shaqeyn:
Dowladihii gumeysiga ayaa qaarkood aqoonsaday xeer Ciise, gaar ahaan marka ay timaaddo xallinta khilaafaadka miyiga. Waxaa loo adeegsaday hab nabadeed oo bulshooyinka lagu xakameeyo.

         
          </p>
          <h1 id="casriga"> 4. Casriga (Qarnigii 20aad–Hadda)</h1>
          <p>
        
Xeer Ciise wali waa nidaam dhaqameed firfircoon oo si gaar ah uga jira miyiga iyo degaannada beesha Ciise ee ku kala yaal Jabuuti, Soomaaliya, iyo Itoobiya.

Isbeddelada Casriga ah:
Sharciyada Dowladaha:
Inkastoo dowladaha casriga ah ee Jabuuti iyo Itoobiya ay leeyihiin nidaam sharciyeed rasmi ah, haddana xeer Ciise wuxuu weli door muhiim ah ku leeyahay degaannada miyiga ah, gaar ahaan halka dowladnimada ay gaabis tahay.
Nabad-Sameynta:
Xeer Ciise ayaa weli door muhiim ah ka ciyaara nabad-sameynta iyo xallinta khilaafaadka gudaha beesha iyo kuwa deriska ah.
Diinta Islaamka:
Islaamku wuxuu saameyn xooggan ku yeeshay xeerka, isagoo xoojiyay dhinacyada caddaaladda, nabadda, iyo wada-noolaanshaha.
Habka Xiligan Loo Isticmaalo Xeerka:
Shirarka odayaasha dhaqanka ayaa weli ah habka ugu weyn ee lagu xalliyo khilaafaadka.
Go’aannada waxaa lagu gaaraa wada-tashi ballaaran, waxaana fulinta xeerka lagu tiirsan yahay wadajirka bulshada.


          </p>
          <h1>   5. Taariikhda Soo Gudbinta Xeerka</h1>
          <p>
        
Xeer Ciise asal ahaan wuxuu ahaa mid afka laga sii gudbiyo, iyadoo odayaasha waayo-aragga ah ay hanti ahaan u hayeen xeerarka. Waxaa la rumeysan yahay in sababta ay ugu badbaaday qarniyo ay tahay:

Isku-dhafidda Xeerka iyo Diinta Islaamka.
Wadajirka Beesha: Ciise waxay ka mid yihiin beelaha sida weyn ugu tiirsan nidaam bulsheed oo wada-jir ah.
Ixtiraamka Odayaasha: Bulshada waxay weligeed qiimeyn weyn siinaysay odayaasha dhaqanka.
         
          </p>
         
        </section>
      </div>
    </div>
  );
};

export default Historique;
