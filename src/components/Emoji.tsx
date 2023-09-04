import { ImageProps, Image } from "@chakra-ui/react";
import BullEye from "../assets/bulls-eye.webp";
import Meh from "../assets/meh.webp";
import ThumbUp from "../assets/thumbs-up.webp";

interface EmojiProp {
  rating: number;
}

const Emoji = ({ rating }: EmojiProp) => {
  if (rating < 3) return null;

  const emojis: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "meh", boxSize: "25px" },
    4: { src: ThumbUp, alt: "recommended", boxSize: "25px" },
    5: { src: BullEye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojis[rating]} boxSize="25px" marginTop={1} />;
};

export default Emoji;
