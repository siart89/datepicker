import React from 'react';
import styled from 'styled-components';

const arr = Array(10).fill(1);

const Scroller: React.FC = () => {
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let prevY = 0;
    const scrollHandler = () => {
      console.log(window.scrollY - prevY);
      const shift = window.scrollY - prevY;
      if (scrollerRef.current && window.scrollY >= 200) {
        scrollerRef.current.scrollTo(0, (scrollerRef.current.scrollTop + shift))
      }
      prevY = window.scrollY;
    }
    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  },[])
  return (
    <StyledWrapper>
      <div className="scroller-item_first"></div>
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
        height: 1800px;
        width: 60%;
        border: 1px solid black;
        margin-left: 20px;
      } 

      &_two {
        max-height: calc(100vh - 200px);
        overflow: auto;
        position: sticky;
        top: 0;
        width: calc(40% - 20px);
        border: 1px solid tomato;
      }   
  }
`;

export default Scroller;