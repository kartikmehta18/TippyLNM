import HeroVideoDialog  from "./ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
    return (
      <div className="relative">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/IMdOovo2ano"
          thumbnailSrc="/videoImg.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/IMdOovo2ano"
          thumbnailSrc="/videoImg.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    );
  }