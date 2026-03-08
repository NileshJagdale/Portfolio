import { useRef } from 'react';
import { useInView } from 'framer-motion';
import '../../constants/thank.css';

const BloomingNightGarden = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: '-100px' });

  return (
    <section
      id="thanks"
      ref={containerRef}
      className="bg-primary relative z-0 h-screen w-full overflow-hidden"
    >
      <div className="container relative mx-auto flex h-full items-end justify-center pb-20">
        {isInView && (
          <div className="flowers">
            {/* Flower 1 */}
            <div className="flower flower--1">
              <div className="flower__leafs flower__leafs--1">
                <div className="flower__leaf flower__leaf--1"></div>
                <div className="flower__leaf flower__leaf--2"></div>
                <div className="flower__leaf flower__leaf--3"></div>
                <div className="flower__leaf flower__leaf--4"></div>
                <div className="flower__white-circle"></div>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
                ))}
              </div>
              <div className="flower__line">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
                ))}
              </div>
            </div>

            {/* Flower 2 */}
            <div className="flower flower--2">
              <div className="flower__leafs flower__leafs--2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`flower__leaf flower__leaf--${i + 1}`}></div>
                ))}
                <div className="flower__white-circle"></div>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
                ))}
              </div>
              <div className="flower__line">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
                ))}
              </div>
            </div>

            {/* Flower 3 */}
            <div className="flower flower--3">
              <div className="flower__leafs flower__leafs--3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`flower__leaf flower__leaf--${i + 1}`}></div>
                ))}
                <div className="flower__white-circle"></div>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
                ))}
              </div>
              <div className="flower__line">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
                ))}
              </div>
            </div>

            {/* Long Grass Elements */}
            <div className="grow-ans" style={{ '--d': '3s' } as React.CSSProperties}>
              <div className="flower__g-long">
                <div className="flower__g-long__top"></div>
                <div className="flower__g-long__bottom"></div>
              </div>
            </div>

            {/* Growing Grass */}
            <div className="growing-grass">
              <div className="flower__grass flower__grass--1">
                <div className="flower__grass--top"></div>
                <div className="flower__grass--bottom"></div>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`flower__grass__leaf flower__grass__leaf--${i + 1}`}
                  ></div>
                ))}
                <div className="flower__grass__overlay"></div>
              </div>
            </div>

            <div className="growing-grass">
              <div className="flower__grass flower__grass--2">
                <div className="flower__grass--top"></div>
                <div className="flower__grass--bottom"></div>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`flower__grass__leaf flower__grass__leaf--${i + 1}`}
                  ></div>
                ))}
                <div className="flower__grass__overlay"></div>
              </div>
            </div>

            {/* Right Grass */}
            <div className="grow-ans" style={{ '--d': '2.5s' } as React.CSSProperties}>
              <div className="flower__g-right flower__g-right--1">
                <div className="leaf"></div>
              </div>
            </div>

            <div className="grow-ans" style={{ '--d': '2.8s' } as React.CSSProperties}>
              <div className="flower__g-right flower__g-right--2">
                <div className="leaf"></div>
              </div>
            </div>

            {/* Front Grass */}
            <div className="grow-ans" style={{ '--d': '3.2s' } as React.CSSProperties}>
              <div className="flower__g-front">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--${
                      i + 1
                    }`}
                  >
                    <div className="flower__g-front__leaf"></div>
                  </div>
                ))}
                <div className="flower__g-front__line"></div>
              </div>
            </div>

            <div className="grow-ans" style={{ '--d': '3.5s' } as React.CSSProperties}>
              <div className="flower__g-fr">
                <div className="leaf"></div>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`flower__g-fr__leaf flower__g-fr__leaf--${i + 1}`}></div>
                ))}
              </div>
            </div>

            {/* Long Grass Groups */}
            {[...Array(8)].map((_, groupIndex) => (
              <div key={groupIndex} className={`long-g long-g--${groupIndex}`}>
                {[...Array(4)].map((_, leafIndex) => (
                  <div
                    key={leafIndex}
                    className="grow-ans"
                    style={
                      { '--d': `${3 + groupIndex * 0.2 + leafIndex * 0.1}s` } as React.CSSProperties
                    }
                  >
                    <div className={`leaf leaf--${leafIndex}`}></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        <div className="font-black text-4xl absolute w-full flex justify-center items-center">
          Thank you
        </div>
        {isInView && (
          <div className="bubbles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="bubble">
                <svg className="heart" viewBox="0 0 32 32">
                  <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
                </svg>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BloomingNightGarden;
