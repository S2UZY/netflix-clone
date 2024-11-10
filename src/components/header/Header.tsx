import { Link, useMatch } from "react-router-dom";
import { useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import { navVariants } from "./Header.animation";
import { Circle, Col, Item, Items, Nav } from "./Header.style";
import { Logo } from "./Logo";

export function Header() {
  const popularMatch = useMatch("/");
  const comingSoonMatch = useMatch("/coming-soon");
  const nowPlaying = useMatch("/now-playing");

  const navAnimation = useAnimation();
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      navAnimation.start("scroll");
    } else {
      navAnimation.start("top");
    }
  });

  return (
    <Nav variants={navVariants} animate={navAnimation} initial={"top"}>
      <Col>
        <Logo />
        <Items>
          <Item>
            <Link to="/">
              POPULAR {popularMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to="/coming-soon">
              COMING SOON {comingSoonMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to="/now-playing">
              NOW PLAYING {nowPlaying && <Circle layoutId="circle" />}
            </Link>
          </Item>
        </Items>
      </Col>
    </Nav>
  );
}
