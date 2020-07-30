import React from 'react';
import styled from 'styled-components';

const arr = Array(10).fill(1);

const Scroller: React.FC = () => {
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let prevY = 0;
    let height = 0;
    if (scrollerRef.current) {
      height = scrollerRef.current.offsetHeight;
    }
    const scrollHandler = () => {

      const elem = scrollerRef.current;
      if (elem) {
        const isSticky = elem.classList.contains('scroller-item_two--sticky_active');
        if (!isSticky && window.scrollY >= height - window.innerHeight + 200){
          elem.classList.add('scroller-item_two--sticky_active');
          elem.scrollTo({
            top: height
          })
        } 
        const shift = elem.scrollHeight - elem.offsetHeight - elem.scrollTop; 

        if (isSticky && window.scrollY < (height - window.innerHeight + 200 - shift)) {
          console.log(shift)
          elem.classList.remove('scroller-item_two--sticky_active');
        }
      }
    }
    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  },[])
  return (
    <StyledWrapper>
      <div className="scroller-item_first">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatum, sunt quia quaerat nesciunt cum maxime pariatur. Cum, suscipit voluptate, esse distinctio reprehenderit asperiores sint eum ab doloremque non consequuntur?
        Id quisquam, officiis atque autem cum, facilis nobis, quidem natus rerum libero voluptatibus expedita molestias sint corrupti commodi dolorum odit quia! Optio deleniti error exercitationem consequuntur doloribus, ipsa harum vero!
        Iusto recusandae magnam cum. Explicabo natus maiores maxime possimus veritatis libero ipsum repudiandae earum totam delectus, tempora et facere enim, alias quasi aperiam! Nemo nostrum corporis, molestiae quia nobis dolores!
        Dicta cupiditate fuga magnam, blanditiis doloribus perspiciatis quae ab! At nisi aliquid quis modi quas doloremque obcaecati repellendus veritatis ullam? Quo pariatur sapiente libero aspernatur vero labore ipsa fuga. Porro.
        Consequatur, vel consequuntur perferendis omnis, iure iste modi odio ad, dolorem officiis debitis eum minus expedita. Unde illo eius omnis tenetur id, consectetur pariatur placeat, perferendis officia, eum sapiente aliquam.
        Maiores voluptas cum nobis. Aliquid dicta facere fuga nisi ad eligendi vero amet perferendis? Sequi nihil odit est iure aliquid iusto? Incidunt, quidem ullam eligendi qui in culpa sapiente impedit.
        Deserunt inventore impedit fugit vel quis repellat laboriosam delectus voluptas doloribus beatae eum dolorem assumenda explicabo, dignissimos vero neque placeat expedita reprehenderit hic amet eaque nam sapiente! Quas, dolorem facilis.
        Magni fuga amet qui, excepturi odit asperiores nesciunt maiores labore, et nemo tenetur esse laudantium soluta dolore facere animi sed magnam natus? Obcaecati ullam explicabo quisquam. Esse consequatur saepe ratione.
        Ullam sit delectus libero aperiam. Distinctio quis accusamus voluptatibus repellendus, cumque enim dolores perferendis ipsum hic. Ducimus nostrum, ipsum nobis similique accusamus laudantium quia nulla repellendus! Rerum perspiciatis illo velit!
        Cumque harum modi porro, reprehenderit minima enim doloribus. Aut aspernatur nisi ad nesciunt, eaque aperiam consequuntur hic tenetur nostrum explicabo alias magni architecto incidunt laborum illo, distinctio dolorem! Atque, perferendis!
        Optio, asperiores sunt! Quibusdam sapiente iure est mollitia distinctio expedita ad officiis a ab numquam, corrupti asperiores et consequatur nihil. Perferendis odit maxime blanditiis natus corrupti mollitia! Nulla, ipsum odit!
        Rerum fuga repellat at totam doloribus voluptates, possimus quis facere ad dolorem ullam est, minus fugit dolor ipsa enim incidunt eum ab similique! Iste hic sapiente vero voluptas eveniet consequuntur.
        Voluptatibus ab in aliquam quibusdam tenetur blanditiis ipsum incidunt, ratione, voluptatem sequi totam! Porro veniam nisi, voluptatibus dignissimos sequi nulla voluptate culpa? Doloremque aspernatur rem voluptatibus nobis explicabo exercitationem praesentium!
        Illum voluptate rerum laboriosam dicta culpa, alias ex provident saepe. Odit nemo, cumque magnam ab beatae delectus, dolorem dolores aliquid culpa reprehenderit, harum eos officiis qui voluptatum. Atque, autem quia?
        Quam, minima aliquam. Similique tempore reprehenderit sapiente accusamus praesentium ut asperiores fugit eaque quaerat eligendi ullam ad rem magni, laborum delectus quae. Cum maiores, doloribus velit earum itaque facere deserunt.
        Molestias necessitatibus facere ducimus corporis ipsum, nemo delectus laborum soluta officiis, illo in. Officiis suscipit odio nemo illo ullam pariatur quaerat veritatis, voluptate tempora unde porro, omnis possimus enim natus.
        Corrupti, dolorum ullam officiis, ipsa sequi vitae aperiam pariatur porro harum est, alias asperiores in. Eius, adipisci vitae aliquam minus exercitationem sunt alias qui consequatur laudantium commodi voluptate corrupti praesentium!
        Hic debitis impedit velit? Excepturi in fugiat, voluptatum totam ducimus cum eaque at, earum maiores facilis sequi natus exercitationem consequatur esse reprehenderit sunt fugit. Modi consequatur esse repellat quaerat doloribus?
        Illo enim consectetur quas, reiciendis amet rem sed voluptas fugiat nulla inventore incidunt suscipit nesciunt ratione fugit, eaque ex qui magni architecto delectus unde nisi minus. Nemo numquam perspiciatis fugiat!
        Assumenda provident nisi non beatae sint fuga vero, doloremque eaque tempore alias quasi illum distinctio a voluptatibus maiores quis at consectetur autem reprehenderit quod explicabo delectus quo modi? Error, quibusdam.
        Voluptatem sit ullam hic nesciunt commodi fugiat id voluptatum velit consequatur suscipit consequuntur corrupti, sint consectetur odio amet rem eveniet aut harum reprehenderit alias? Corporis vero dolorum quasi labore quisquam.
        Amet maiores, cum rem perferendis dignissimos in pariatur itaque veritatis enim maxime assumenda odit eum nostrum, accusamus nesciunt. Ipsa ipsum autem, ut rerum animi dignissimos. Cum rerum minima adipisci deleniti.
        Numquam aspernatur repellendus dolorem commodi ducimus labore vitae rerum aliquam, omnis hic alias nihil. Magni reiciendis laborum veniam, voluptatem voluptatibus voluptas est? Neque ab labore magnam reprehenderit laboriosam. Repudiandae, cumque.
        Cupiditate sunt itaque quaerat vel iure dolorum placeat unde iste, architecto dignissimos id laudantium ipsum explicabo fuga molestias ut pariatur cumque deleniti accusamus harum voluptates. Magni, obcaecati? Dolor, ut reiciendis.
        Mollitia illo fugit repudiandae ea, consequuntur a fugiat eius in asperiores tenetur quidem dolore commodi odio rem dolor ratione autem sint? Id itaque delectus, incidunt distinctio deserunt perspiciatis sapiente labore?
        Obcaecati, accusamus. Soluta, temporibus totam minima sequi nam magnam aliquid ad quo dolorem sapiente? Quod error dolore quas possimus quae ratione saepe non omnis libero excepturi? Fugit, ipsa. Nam, ad?
        Sapiente, consectetur? Eum, quo aut aperiam totam assumenda velit recusandae! Consequuntur omnis esse ipsa quisquam possimus minima deserunt, voluptates laborum corporis magnam impedit maiores, molestiae cupiditate nulla quae officiis repudiandae?
        Esse necessitatibus, harum eius dolorem sequi blanditiis ut provident eum corrupti? Eius enim saepe a deleniti quidem, labore ab asperiores tempora nulla vero voluptatum corporis iure aut culpa quae numquam.
        Quia hic eum similique beatae molestiae laboriosam temporibus. Officia debitis quo sed dolorem quos nihil expedita fugit velit provident nemo assumenda beatae fugiat possimus odio, autem ea dolore asperiores blanditiis.
        Quod quas, delectus hic sunt possimus tempora natus odit necessitatibus doloribus fuga, asperiores recusandae eos. Deleniti, consequatur accusamus exercitationem distinctio fugiat dignissimos soluta nihil non repellendus sit earum libero id?
        Ipsa autem adipisci perferendis nesciunt soluta error dolore. Omnis nisi quisquam, quia dolorum inventore vero, minima quidem dicta molestias asperiores fugit voluptatibus similique minus iure esse id? Vero, aperiam fuga.
        Nisi obcaecati esse quia. Odit error, culpa consectetur asperiores natus id corporis facilis animi? Quisquam quod iusto accusamus molestiae! Ipsa quo qui, autem non officia et facere incidunt aliquam nesciunt.
        Sequi autem ratione quas enim qui necessitatibus cum laborum cumque quam eum deserunt obcaecati, ducimus, voluptates a magni in placeat doloribus soluta exercitationem odio! Aliquid eum voluptatibus ducimus veritatis molestias.
        Distinctio repudiandae tenetur aliquid, corporis fugit cumque voluptas reprehenderit esse non. Molestiae saepe unde veritatis delectus, eum, alias, exercitationem quaerat eaque ipsa vel cum hic culpa sequi ab corrupti quod.
        Corrupti voluptate expedita animi! Corporis fugit beatae amet doloribus dolore asperiores aliquam totam mollitia tempore reiciendis ratione a neque, blanditiis vitae pariatur architecto assumenda consectetur in. Tenetur rerum eum quibusdam.
        In, quaerat aliquam iusto soluta delectus culpa illum rem ab similique labore, voluptates ullam numquam voluptatibus, sed tempore mollitia facilis maxime odio error dicta maiores. Blanditiis fugit beatae ea veritatis?
        Laudantium accusantium ex nostrum numquam aliquam et itaque repellendus reiciendis. Suscipit perferendis nam repellendus quis rem dolores dolore modi quo maiores et mollitia veritatis enim molestias, corrupti maxime fugiat beatae.
        Animi culpa iusto earum beatae, recusandae doloribus hic explicabo, sed repellendus omnis dicta perferendis? Temporibus suscipit assumenda unde, itaque ipsum iste quo voluptatem at architecto vero ipsa eaque odio placeat.
        Veniam aperiam aliquam sequi, maxime laborum explicabo quae natus soluta repudiandae distinctio doloribus inventore, rerum consequuntur! Iure labore corrupti quisquam quidem porro, sapiente voluptatem quasi. Officia dolorem sit consequatur id.
        Cum tempore nostrum fuga, possimus praesentium ad nisi vitae. Sed nisi quisquam quaerat error corporis eaque rerum aut odit ex libero maiores consequatur mollitia, vitae quasi magni, hic natus iste?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatum, sunt quia quaerat nesciunt cum maxime pariatur. Cum, suscipit voluptate, esse distinctio reprehenderit asperiores sint eum ab doloremque non consequuntur?
        Id quisquam, officiis atque autem cum, facilis nobis, quidem natus rerum libero voluptatibus expedita molestias sint corrupti commodi dolorum odit quia! Optio deleniti error exercitationem consequuntur doloribus, ipsa harum vero!
        Iusto recusandae magnam cum. Explicabo natus maiores maxime possimus veritatis libero ipsum repudiandae earum totam delectus, tempora et facere enim, alias quasi aperiam! Nemo nostrum corporis, molestiae quia nobis dolores!
        Dicta cupiditate fuga magnam, blanditiis doloribus perspiciatis quae ab! At nisi aliquid quis modi quas doloremque obcaecati repellendus veritatis ullam? Quo pariatur sapiente libero aspernatur vero labore ipsa fuga. Porro.
        Consequatur, vel consequuntur perferendis omnis, iure iste modi odio ad, dolorem officiis debitis eum minus expedita. Unde illo eius omnis tenetur id, consectetur pariatur placeat, perferendis officia, eum sapiente aliquam.
        Maiores voluptas cum nobis. Aliquid dicta facere fuga nisi ad eligendi vero amet perferendis? Sequi nihil odit est iure aliquid iusto? Incidunt, quidem ullam eligendi qui in culpa sapiente impedit.
        Deserunt inventore impedit fugit vel quis repellat laboriosam delectus voluptas doloribus beatae eum dolorem assumenda explicabo, dignissimos vero neque placeat expedita reprehenderit hic amet eaque nam sapiente! Quas, dolorem facilis.
        Magni fuga amet qui, excepturi odit asperiores nesciunt maiores labore, et nemo tenetur esse laudantium soluta dolore facere animi sed magnam natus? Obcaecati ullam explicabo quisquam. Esse consequatur saepe ratione.
        Ullam sit delectus libero aperiam. Distinctio quis accusamus voluptatibus repellendus, cumque enim dolores perferendis ipsum hic. Ducimus nostrum, ipsum nobis similique accusamus laudantium quia nulla repellendus! Rerum perspiciatis illo velit!
        Cumque harum modi porro, reprehenderit minima enim doloribus. Aut aspernatur nisi ad nesciunt, eaque aperiam consequuntur hic tenetur nostrum explicabo alias magni architecto incidunt laborum illo, distinctio dolorem! Atque, perferendis!
        Optio, asperiores sunt! Quibusdam sapiente iure est mollitia distinctio expedita ad officiis a ab numquam, corrupti asperiores et consequatur nihil. Perferendis odit maxime blanditiis natus corrupti mollitia! Nulla, ipsum odit!
        Rerum fuga repellat at totam doloribus voluptates, possimus quis facere ad dolorem ullam est, minus fugit dolor ipsa enim incidunt eum ab similique! Iste hic sapiente vero voluptas eveniet consequuntur.
        Voluptatibus ab in aliquam quibusdam tenetur blanditiis ipsum incidunt, ratione, voluptatem sequi totam! Porro veniam nisi, voluptatibus dignissimos sequi nulla voluptate culpa? Doloremque aspernatur rem voluptatibus nobis explicabo exercitationem praesentium!
        Illum voluptate rerum laboriosam dicta culpa, alias ex provident saepe. Odit nemo, cumque magnam ab beatae delectus, dolorem dolores aliquid culpa reprehenderit, harum eos officiis qui voluptatum. Atque, autem quia?
        Quam, minima aliquam. Similique tempore reprehenderit sapiente accusamus praesentium ut asperiores fugit eaque quaerat eligendi ullam ad rem magni, laborum delectus quae. Cum maiores, doloribus velit earum itaque facere deserunt.
        Molestias necessitatibus facere ducimus corporis ipsum, nemo delectus laborum soluta officiis, illo in. Officiis suscipit odio nemo illo ullam pariatur quaerat veritatis, voluptate tempora unde porro, omnis possimus enim natus.
        Corrupti, dolorum ullam officiis, ipsa sequi vitae aperiam pariatur porro harum est, alias asperiores in. Eius, adipisci vitae aliquam minus exercitationem sunt alias qui consequatur laudantium commodi voluptate corrupti praesentium!
        Hic debitis impedit velit? Excepturi in fugiat, voluptatum totam ducimus cum eaque at, earum maiores facilis sequi natus exercitationem consequatur esse reprehenderit sunt fugit. Modi consequatur esse repellat quaerat doloribus?
        Illo enim consectetur quas, reiciendis amet rem sed voluptas fugiat nulla inventore incidunt suscipit nesciunt ratione fugit, eaque ex qui magni architecto delectus unde nisi minus. Nemo numquam perspiciatis fugiat!
        Assumenda provident nisi non beatae sint fuga vero, doloremque eaque tempore alias quasi illum distinctio a voluptatibus maiores quis at consectetur autem reprehenderit quod explicabo delectus quo modi? Error, quibusdam.
        Voluptatem sit ullam hic nesciunt commodi fugiat id voluptatum velit consequatur suscipit consequuntur corrupti, sint consectetur odio amet rem eveniet aut harum reprehenderit alias? Corporis vero dolorum quasi labore quisquam.
        Amet maiores, cum rem perferendis dignissimos in pariatur itaque veritatis enim maxime assumenda odit eum nostrum, accusamus nesciunt. Ipsa ipsum autem, ut rerum animi dignissimos. Cum rerum minima adipisci deleniti.
        Numquam aspernatur repellendus dolorem commodi ducimus labore vitae rerum aliquam, omnis hic alias nihil. Magni reiciendis laborum veniam, voluptatem voluptatibus voluptas est? Neque ab labore magnam reprehenderit laboriosam. Repudiandae, cumque.
        Cupiditate sunt itaque quaerat vel iure dolorum placeat unde iste, architecto dignissimos id laudantium ipsum explicabo fuga molestias ut pariatur cumque deleniti accusamus harum voluptates. Magni, obcaecati? Dolor, ut reiciendis.
        Mollitia illo fugit repudiandae ea, consequuntur a fugiat eius in asperiores tenetur quidem dolore commodi odio rem dolor ratione autem sint? Id itaque delectus, incidunt distinctio deserunt perspiciatis sapiente labore?
        Obcaecati, accusamus. Soluta, temporibus totam minima sequi nam magnam aliquid ad quo dolorem sapiente? Quod error dolore quas possimus quae ratione saepe non omnis libero excepturi? Fugit, ipsa. Nam, ad?
        Sapiente, consectetur? Eum, quo aut aperiam totam assumenda velit recusandae! Consequuntur omnis esse ipsa quisquam possimus minima deserunt, voluptates laborum corporis magnam impedit maiores, molestiae cupiditate nulla quae officiis repudiandae?
        Esse necessitatibus, harum eius dolorem sequi blanditiis ut provident eum corrupti? Eius enim saepe a deleniti quidem, labore ab asperiores tempora nulla vero voluptatum corporis iure aut culpa quae numquam.
        Quia hic eum similique beatae molestiae laboriosam temporibus. Officia debitis quo sed dolorem quos nihil expedita fugit velit provident nemo assumenda beatae fugiat possimus odio, autem ea dolore asperiores blanditiis.
        Quod quas, delectus hic sunt possimus tempora natus odit necessitatibus doloribus fuga, asperiores recusandae eos. Deleniti, consequatur accusamus exercitationem distinctio fugiat dignissimos soluta nihil non repellendus sit earum libero id?
        Ipsa autem adipisci perferendis nesciunt soluta error dolore. Omnis nisi quisquam, quia dolorum inventore vero, minima quidem dicta molestias asperiores fugit voluptatibus similique minus iure esse id? Vero, aperiam fuga.
        Nisi obcaecati esse quia. Odit error, culpa consectetur asperiores natus id corporis facilis animi? Quisquam quod iusto accusamus molestiae! Ipsa quo qui, autem non officia et facere incidunt aliquam nesciunt.
        Sequi autem ratione quas enim qui necessitatibus cum laborum cumque quam eum deserunt obcaecati, ducimus, voluptates a magni in placeat doloribus soluta exercitationem odio! Aliquid eum voluptatibus ducimus veritatis molestias.
        Distinctio repudiandae tenetur aliquid, corporis fugit cumque voluptas reprehenderit esse non. Molestiae saepe unde veritatis delectus, eum, alias, exercitationem quaerat eaque ipsa vel cum hic culpa sequi ab corrupti quod.
        Corrupti voluptate expedita animi! Corporis fugit beatae amet doloribus dolore asperiores aliquam totam mollitia tempore reiciendis ratione a neque, blanditiis vitae pariatur architecto assumenda consectetur in. Tenetur rerum eum quibusdam.
        In, quaerat aliquam iusto soluta delectus culpa illum rem ab similique labore, voluptates ullam numquam voluptatibus, sed tempore mollitia facilis maxime odio error dicta maiores. Blanditiis fugit beatae ea veritatis?
        Laudantium accusantium ex nostrum numquam aliquam et itaque repellendus reiciendis. Suscipit perferendis nam repellendus quis rem dolores dolore modi quo maiores et mollitia veritatis enim molestias, corrupti maxime fugiat beatae.
        Animi culpa iusto earum beatae, recusandae doloribus hic explicabo, sed repellendus omnis dicta perferendis? Temporibus suscipit assumenda unde, itaque ipsum iste quo voluptatem at architecto vero ipsa eaque odio placeat.
        Veniam aperiam aliquam sequi, maxime laborum explicabo quae natus soluta repudiandae distinctio doloribus inventore, rerum consequuntur! Iure labore corrupti quisquam quidem porro, sapiente voluptatem quasi. Officia dolorem sit consequatur id.
        Cum tempore nostrum fuga, possimus praesentium ad nisi vitae. Sed nisi quisquam quaerat error corporis eaque rerum aut odit ex libero maiores consequatur mollitia, vitae quasi magni, hic natus iste?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatum, sunt quia quaerat nesciunt cum maxime pariatur. Cum, suscipit voluptate, esse distinctio reprehenderit asperiores sint eum ab doloremque non consequuntur?
        Id quisquam, officiis atque autem cum, facilis nobis, quidem natus rerum libero voluptatibus expedita molestias sint corrupti commodi dolorum odit quia! Optio deleniti error exercitationem consequuntur doloribus, ipsa harum vero!
        Iusto recusandae magnam cum. Explicabo natus maiores maxime possimus veritatis libero ipsum repudiandae earum totam delectus, tempora et facere enim, alias quasi aperiam! Nemo nostrum corporis, molestiae quia nobis dolores!
        Dicta cupiditate fuga magnam, blanditiis doloribus perspiciatis quae ab! At nisi aliquid quis modi quas doloremque obcaecati repellendus veritatis ullam? Quo pariatur sapiente libero aspernatur vero labore ipsa fuga. Porro.
        Consequatur, vel consequuntur perferendis omnis, iure iste modi odio ad, dolorem officiis debitis eum minus expedita. Unde illo eius omnis tenetur id, consectetur pariatur placeat, perferendis officia, eum sapiente aliquam.
        Maiores voluptas cum nobis. Aliquid dicta facere fuga nisi ad eligendi vero amet perferendis? Sequi nihil odit est iure aliquid iusto? Incidunt, quidem ullam eligendi qui in culpa sapiente impedit.
        Deserunt inventore impedit fugit vel quis repellat laboriosam delectus voluptas doloribus beatae eum dolorem assumenda explicabo, dignissimos vero neque placeat expedita reprehenderit hic amet eaque nam sapiente! Quas, dolorem facilis.
        Magni fuga amet qui, excepturi odit asperiores nesciunt maiores labore, et nemo tenetur esse laudantium soluta dolore facere animi sed magnam natus? Obcaecati ullam explicabo quisquam. Esse consequatur saepe ratione.
        Ullam sit delectus libero aperiam. Distinctio quis accusamus voluptatibus repellendus, cumque enim dolores perferendis ipsum hic. Ducimus nostrum, ipsum nobis similique accusamus laudantium quia nulla repellendus! Rerum perspiciatis illo velit!
        Cumque harum modi porro, reprehenderit minima enim doloribus. Aut aspernatur nisi ad nesciunt, eaque aperiam consequuntur hic tenetur nostrum explicabo alias magni architecto incidunt laborum illo, distinctio dolorem! Atque, perferendis!
        Optio, asperiores sunt! Quibusdam sapiente iure est mollitia distinctio expedita ad officiis a ab numquam, corrupti asperiores et consequatur nihil. Perferendis odit maxime blanditiis natus corrupti mollitia! Nulla, ipsum odit!
        Rerum fuga repellat at totam doloribus voluptates, possimus quis facere ad dolorem ullam est, minus fugit dolor ipsa enim incidunt eum ab similique! Iste hic sapiente vero voluptas eveniet consequuntur.
        Voluptatibus ab in aliquam quibusdam tenetur blanditiis ipsum incidunt, ratione, voluptatem sequi totam! Porro veniam nisi, voluptatibus dignissimos sequi nulla voluptate culpa? Doloremque aspernatur rem voluptatibus nobis explicabo exercitationem praesentium!
        Illum voluptate rerum laboriosam dicta culpa, alias ex provident saepe. Odit nemo, cumque magnam ab beatae delectus, dolorem dolores aliquid culpa reprehenderit, harum eos officiis qui voluptatum. Atque, autem quia?
        Quam, minima aliquam. Similique tempore reprehenderit sapiente accusamus praesentium ut asperiores fugit eaque quaerat eligendi ullam ad rem magni, laborum delectus quae. Cum maiores, doloribus velit earum itaque facere deserunt.
        Molestias necessitatibus facere ducimus corporis ipsum, nemo delectus laborum soluta officiis, illo in. Officiis suscipit odio nemo illo ullam pariatur quaerat veritatis, voluptate tempora unde porro, omnis possimus enim natus.
        Corrupti, dolorum ullam officiis, ipsa sequi vitae aperiam pariatur porro harum est, alias asperiores in. Eius, adipisci vitae aliquam minus exercitationem sunt alias qui consequatur laudantium commodi voluptate corrupti praesentium!
        Hic debitis impedit velit? Excepturi in fugiat, voluptatum totam ducimus cum eaque at, earum maiores facilis sequi natus exercitationem consequatur esse reprehenderit sunt fugit. Modi consequatur esse repellat quaerat doloribus?
        Illo enim consectetur quas, reiciendis amet rem sed voluptas fugiat nulla inventore incidunt suscipit nesciunt ratione fugit, eaque ex qui magni architecto delectus unde nisi minus. Nemo numquam perspiciatis fugiat!
        Assumenda provident nisi non beatae sint fuga vero, doloremque eaque tempore alias quasi illum distinctio a voluptatibus maiores quis at consectetur autem reprehenderit quod explicabo delectus quo modi? Error, quibusdam.
        Voluptatem sit ullam hic nesciunt commodi fugiat id voluptatum velit consequatur suscipit consequuntur corrupti, sint consectetur odio amet rem eveniet aut harum reprehenderit alias? Corporis vero dolorum quasi labore quisquam.
        Amet maiores, cum rem perferendis dignissimos in pariatur itaque veritatis enim maxime assumenda odit eum nostrum, accusamus nesciunt. Ipsa ipsum autem, ut rerum animi dignissimos. Cum rerum minima adipisci deleniti.
        Numquam aspernatur repellendus dolorem commodi ducimus labore vitae rerum aliquam, omnis hic alias nihil. Magni reiciendis laborum veniam, voluptatem voluptatibus voluptas est? Neque ab labore magnam reprehenderit laboriosam. Repudiandae, cumque.
        Cupiditate sunt itaque quaerat vel iure dolorum placeat unde iste, architecto dignissimos id laudantium ipsum explicabo fuga molestias ut pariatur cumque deleniti accusamus harum voluptates. Magni, obcaecati? Dolor, ut reiciendis.
        Mollitia illo fugit repudiandae ea, consequuntur a fugiat eius in asperiores tenetur quidem dolore commodi odio rem dolor ratione autem sint? Id itaque delectus, incidunt distinctio deserunt perspiciatis sapiente labore?
        Obcaecati, accusamus. Soluta, temporibus totam minima sequi nam magnam aliquid ad quo dolorem sapiente? Quod error dolore quas possimus quae ratione saepe non omnis libero excepturi? Fugit, ipsa. Nam, ad?
        Sapiente, consectetur? Eum, quo aut aperiam totam assumenda velit recusandae! Consequuntur omnis esse ipsa quisquam possimus minima deserunt, voluptates laborum corporis magnam impedit maiores, molestiae cupiditate nulla quae officiis repudiandae?
        Esse necessitatibus, harum eius dolorem sequi blanditiis ut provident eum corrupti? Eius enim saepe a deleniti quidem, labore ab asperiores tempora nulla vero voluptatum corporis iure aut culpa quae numquam.
        Quia hic eum similique beatae molestiae laboriosam temporibus. Officia debitis quo sed dolorem quos nihil expedita fugit velit provident nemo assumenda beatae fugiat possimus odio, autem ea dolore asperiores blanditiis.
        Quod quas, delectus hic sunt possimus tempora natus odit necessitatibus doloribus fuga, asperiores recusandae eos. Deleniti, consequatur accusamus exercitationem distinctio fugiat dignissimos soluta nihil non repellendus sit earum libero id?
        Ipsa autem adipisci perferendis nesciunt soluta error dolore. Omnis nisi quisquam, quia dolorum inventore vero, minima quidem dicta molestias asperiores fugit voluptatibus similique minus iure esse id? Vero, aperiam fuga.
        Nisi obcaecati esse quia. Odit error, culpa consectetur asperiores natus id corporis facilis animi? Quisquam quod iusto accusamus molestiae! Ipsa quo qui, autem non officia et facere incidunt aliquam nesciunt.
        Sequi autem ratione quas enim qui necessitatibus cum laborum cumque quam eum deserunt obcaecati, ducimus, voluptates a magni in placeat doloribus soluta exercitationem odio! Aliquid eum voluptatibus ducimus veritatis molestias.
        Distinctio repudiandae tenetur aliquid, corporis fugit cumque voluptas reprehenderit esse non. Molestiae saepe unde veritatis delectus, eum, alias, exercitationem quaerat eaque ipsa vel cum hic culpa sequi ab corrupti quod.
        Corrupti voluptate expedita animi! Corporis fugit beatae amet doloribus dolore asperiores aliquam totam mollitia tempore reiciendis ratione a neque, blanditiis vitae pariatur architecto assumenda consectetur in. Tenetur rerum eum quibusdam.
        In, quaerat aliquam iusto soluta delectus culpa illum rem ab similique labore, voluptates ullam numquam voluptatibus, sed tempore mollitia facilis maxime odio error dicta maiores. Blanditiis fugit beatae ea veritatis?
        Laudantium accusantium ex nostrum numquam aliquam et itaque repellendus reiciendis. Suscipit perferendis nam repellendus quis rem dolores dolore modi quo maiores et mollitia veritatis enim molestias, corrupti maxime fugiat beatae.
        Animi culpa iusto earum beatae, recusandae doloribus hic explicabo, sed repellendus omnis dicta perferendis? Temporibus suscipit assumenda unde, itaque ipsum iste quo voluptatem at architecto vero ipsa eaque odio placeat.
        Veniam aperiam aliquam sequi, maxime laborum explicabo quae natus soluta repudiandae distinctio doloribus inventore, rerum consequuntur! Iure labore corrupti quisquam quidem porro, sapiente voluptatem quasi. Officia dolorem sit consequatur id.
        Cum tempore nostrum fuga, possimus praesentium ad nisi vitae. Sed nisi quisquam quaerat error corporis eaque rerum aut odit ex libero maiores consequatur mollitia, vitae quasi magni, hic natus iste?
      </div>
      <div className="scroller-item_two" ref={scrollerRef}>
        {
          arr.map((_, idx) => {
            return (
              <p key={idx}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quos pariatur
               doloribus minima quam modi earum! Perferendis asperiores nam possimus deleniti maiores hic veritatis odio, ex quis eos accusamus esse beatae suscipit aliquam facere deserunt et magnam repudiandae? Consectetur, dolores.
            </p>
            )
          })
        }

      </div>
    </StyledWrapper>
  )
};

const StyledWrapper = styled.div`
  width: 960px;
  display: flex;
  position: relative;
  padding-top: 200px;
  margin: 0 auto;

  .scroller-item {
      &_first {
        width: 60%;
        border: 1px solid black;
        margin-left: 20px;
      } 

      &_two {
        /* max-height: calc(100vh - 200px); */
        /* overflow: auto; */
        /* position: sticky; */
        /* top: 200px; */
        position: relative;
        height: max-content;
        width: calc(40% - 20px);
        border: 1px solid tomato;

        & > p:last-child {
          background: tomato;
        }

        &--sticky_active {
          max-height: calc(100vh); 
          overflow: auto; 
          position: sticky; 
          top: 0; 
        }
      }   
  }
`;

export default Scroller;