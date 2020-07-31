import React from 'react';
import styled from 'styled-components';

const arr = Array(10).fill(1);

const Scroller: React.FC = () => {
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const elem = scrollerRef.current;
    if (elem) {
      const height = elem.scrollHeight;
      if (height > document.body.scrollHeight) {
        console.log('height > document.body.scrollHeigh')

        const shift = height - document.body.scrollHeight;
        const topOffset = parseInt(getComputedStyle(elem).top);
        elem.style.top = (document.body.scrollHeight - window.innerHeight) === 0 ? `${topOffset}px` : `${topOffset - shift}`
        if (document.body.scrollHeight - window.innerHeight > 0) {
          console.log('get')
          elem.style.maxHeight = `${document.body.scrollHeight}px`
        }
        
      } else {
        const top = height - window.innerHeight;
        elem.style.top = `-${top}px`;
        elem.style.maxHeight = `${document.body.scrollHeight - 202}px`
      }
    }
  }, [])

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
        Dicta cupiditate fuga magnam, blanditiis doloribus perspiciatis quae ab! At nisi aliquid quis modi quas doloremque obcaecati repellendus veritatis ullam? Quo pariatur sapiente libero aspernatur vero labore ipsa fuga. Porro.
        Consequatur, vel consequuntur perferendis omnis, iure iste modi odio ad, dolorem officiis debitis eum minus expedita. Unde illo eius omnis tenetur id, consectetur pariatur placeat, perferendis officia, eum sapiente aliquam.
        Maiores voluptas cum nobis. Aliquid dicta facere fuga nisi ad eligendi vero amet perferendis? Sequi nihil odit est iure aliquid iusto? Incidunt, quidem ullam eligendi qui in culpa sapiente impedit.
       Deserunt inventore impedit fugit vel quis repellat laboriosam delectus voluptas doloribus beatae eum dolorem assumenda explicabo, dignissimos vero neque placeat expedita reprehenderit hic amet eaque nam sapiente! Quas, dolorem facilis.
        Magni fuga amet qui, excepturi odit asperiores nesciunt maiores labore, et nemo tenetur esse laudantium soluta dolore facere animi sed magnam natus? Obcaecati ullam explicabo quisquam. Esse consequatur saepe ratione.
        Dicta cupiditate fuga magnam, blanditiis doloribus perspiciatis quae ab! At nisi aliquid quis modi quas doloremque obcaecati repellendus veritatis ullam? Quo pariatur sapiente libero aspernatur vero labore ipsa fuga. Porro.
        Consequatur, vel consequuntur perferendis omnis, iure iste modi odio ad, dolorem officiis debitis eum minus expedita. Unde illo eius omnis tenetur id, consectetur pariatur placeat, perferendis officia, eum sapiente aliquam.
        Deserunt inventore impedit fugit vel qu is repellat laboriosam delectus voluptas doloribus beatae eum dolorem assumenda explicabo, dignissimos vero neque placeat expedita reprehenderit hic amet eaque nam sapiente! Quas, dolorem facilis.
        Magni fuga amet qui, excepturi odit asperiores nesciunt maiores labore, et nemo tenetur esse laudantium soluta dolore facere animi sed magnam natus? Obcaecati ullam explicabo quisquam. Esse consequatur saepe ratione.
        Dicta cupiditate fuga magnam, blanditiis doloribus perspiciatis quae ab! At nisi aliquid quis modi quas doloremque obcaecati repellendus veritatis ullam? Quo pariatur sapiente libero aspernatur vero labore ipsa fuga. Porro.
        Consequatur, vel consequuntur perferendis omnis, iure iste modi odio ad, dolorem officiis debitis eum minus expedita. Unde illo eius omnis tenetur id, consectetur pariatur placeat, perferendis officia, eum sapiente aliquam.
       
       Deserunt inventore impedit fugit vel quis repellat laboriosam delectus voluptas doloribus beatae eum dolorem assumenda explicabo, dignissimos vero neque placeat expedita reprehenderit hic amet eaque nam sapiente! Quas, dolorem facilis.
        Magni fuga amet qui, excepturi odit asperiores nesciunt maiores labore, et nemo tenetur esse laudantium soluta dolore facere animi sed magnam natus? Obcaecati ullam explicabo quisquam. Esse consequatur saepe ratione.
        Dicta cupiditate fuga magnam, blanditiis doloribus perspiciatis quae ab! At nisi aliquid quis modi quas doloremque obcaecati repellendus veritatis ullam? Quo pariatur sapiente libero aspernatur vero labore ipsa fuga. Porro.
        Consequatur, vel consequuntur perferendis omnis, iure iste modi odio ad, dolorem officiis debitis eum minus expedita. Unde illo eius omnis tenetur id, consectetur pariatur placeat, perferendis officia, eum sapiente aliquam.
        Deserunt inventore impedit fugit vel qu is repellat laboriosam delectus voluptas doloribus beatae eum dolorem assumenda explicabo, dignissimos vero neque placeat expedita reprehenderit hic amet eaque nam sapiente! Quas, dolorem facilis.
        Magni fuga amet qui, excepturi odit asperiores nesciunt maiores labore, et nemo tenetur esse laudantium soluta dolore facere animi sed magnam natus? Obcaecati ullam explicabo quisquam. Esse consequatur saepe ratione.
        Dicta cupiditate fuga magnam, blanditiis doloribus perspiciatis quae ab! At nisi aliquid quis modi quas doloremque obcaecati repellendus veritatis ullam? Quo pariatur sapiente libero aspernatur vero labore ipsa fuga. Porro.
        Consequatur, vel consequuntur perferendis omnis, iure iste modi odio ad, dolorem officiis debitis eum minus expedita. Unde illo eius omnis tenetur id, consectetur pariatur placeat, perferendis officia, eum sapiente aliquam.
       
       Deserunt inventore impedit fugit vel quis repellat laboriosam delectus voluptas doloribus beatae eum dolorem assumenda explicabo, dignissimos vero neque placeat expedita reprehenderit hic amet eaque nam sapiente! Quas, dolorem facilis.
        Magni fuga amet qui, excepturi odit asperiores nesciunt maiores labore, et nemo tenetur esse laudantium soluta dolore facere animi sed magnam natus? Obcaecati ullam explicabo quisquam. Esse consequatur saepe ratione.
        Dicta cupiditate fuga magnam, blanditiis doloribus perspiciatis quae ab! At nisi aliquid quis modi quas doloremque obcaecati repellendus veritatis ullam? Quo pariatur sapiente libero aspernatur vero labore ipsa fuga. Porro.
        Consequatur, vel consequuntur perferendis omnis, iure iste modi odio ad, dolorem officiis debitis eum minus expedita. Unde illo eius omnis tenetur id, consectetur pariatur placeat, perferendis officia, eum sapiente aliquam.
        Deserunt inventore impedit fugit vel qu is repellat laboriosam delectus voluptas doloribus beatae eum dolorem assumenda explicabo, dignissimos vero neque placeat expedita reprehenderit hic amet eaque nam sapiente! Quas, dolorem facilis.
        Magni fuga amet qui, excepturi odit asperiores nesciunt maiores labore, et nemo tenetur esse laudantium soluta dolore facere animi sed magnam natus? Obcaecati ullam explicabo quisquam. Esse consequatur saepe ratione.
        Dicta cupiditate fuga magnam, blanditiis doloribus perspiciatis quae ab! At nisi aliquid quis modi quas doloremque obcaecati repellendus veritatis ullam? Quo pariatur sapiente libero aspernatur vero labore ipsa fuga. Porro.
        Consequatur, vel consequuntur perferendis omnis, iure iste modi odio ad, dolorem officiis debitis eum minus expedita. Unde illo eius omnis tenetur id, consectetur pariatur placeat, perferendis officia, eum sapiente aliquam.
       
       Deserunt inventore impedit fugit vel quis repellat laboriosam delectus voluptas doloribus beatae eum dolorem assumenda explicabo, dignissimos vero neque placeat expedita reprehenderit hic amet eaque nam sapiente! Quas, dolorem facilis.
        Magni fuga amet qui, excepturi odit asperiores nesciunt maiores labore, et nemo tenetur esse laudantium soluta dolore facere animi sed magnam natus? Obcaecati ullam explicabo quisquam. Esse consequatur saepe ratione.
        Dicta cupiditate fuga magnam, blanditiis doloribus perspiciatis quae ab! At nisi aliquid quis modi quas doloremque obcaecati repellendus veritatis ullam? Quo pariatur sapiente libero aspernatur vero labore ipsa fuga. Porro.
        Consequatur, vel consequuntur perferendis omnis, iure iste modi odio ad, dolorem officiis debitis eum minus expedita. Unde illo eius omnis tenetur id, consectetur pariatur placeat, perferendis officia, eum sapiente aliquam.
        Deserunt inventore impedit fugit vel qu is repellat laboriosam delectus voluptas doloribus beatae eum dolorem assumenda explicabo, dignissimos vero neque placeat expedita reprehenderit hic amet eaque nam sapiente! Quas, dolorem facilis.
        Magni fuga amet qui, excepturi odit asperiores nesciunt maiores labore, et nemo tenetur esse laudantium soluta dolore facere animi sed magnam natus? Obcaecati ullam explicabo quisquam. Esse consequatur saepe ratione.
        Dicta cupiditate fuga magnam, blanditiis doloribus perspiciatis quae ab! At nisi aliquid quis modi quas doloremque obcaecati repellendus veritatis ullam? Quo pariatur sapiente libero aspernatur vero labore ipsa fuga. Porro.
        Consequatur, vel consequuntur perferendis omnis, iure iste modi odio ad, dolorem officiis debitis eum minus expedita. Unde illo eius omnis tenetur id, consectetur pariatur placeat, perferendis officia, eum sapiente aliquam.
       
 
   
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
  align-items: flex-start;

  .scroller-item {
      &_first {
        width: 60%;
        border: 1px solid black;
        margin-left: 20px;
      } 

      &_two {
        overflow: auto;
        position: sticky;
        /* height: max-content; */
        width: calc(40% - 20px);
        border: 1px solid tomato;
        max-height: calc(100vh - 218px);
        top: 200px;
        ::-webkit-scrollbar {
          display: none;
        }
        & > p:last-child {
          background: tomato;
        }

        & > p {
          padding: 0;
          margin: 0;
        }

        &--sticky_active {
          /* max-height: calc(100vh);  */
          max-height: max-content;
          overflow: auto; 
          position: sticky; 
        }
      }   
  }
`;

export default Scroller;