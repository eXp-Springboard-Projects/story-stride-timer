
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StoryPageProps {
  pageNumber: number;
}

const storyContent = {
  1: {
    title: "The Enchanted Forest Beckons",
    image: "photo-1523712999610-f77fbcfc3843",
    content: `As twilight descends upon the realm, you find yourself standing at the edge of the legendary Whispering Woods. Ancient tales speak of this mystical forest where time flows differently, and every step forward reveals secrets that have been hidden for centuries.

The massive oak trees tower above you, their gnarled branches reaching toward the star-speckled sky like the arms of ancient guardians. A gentle mist rolls between the trunks, carrying with it the sweet scent of night-blooming jasmine and the distant sound of a babbling brook.

Your heart races with anticipation as you notice a faint, golden glow emanating from deep within the forest. The locals warned you about this place – they say those who enter are forever changed, that the forest tests the courage and wisdom of all who dare to venture into its depths.

You adjust your pack and take a deep breath of the cool evening air. This is the moment you've been preparing for. The adventure of a lifetime awaits, and there's no turning back now. Every legend begins with a single step into the unknown.`
  },
  2: {
    title: "The Guardian's Challenge",
    image: "photo-1426604966848-d7adac402bff",
    content: `Deeper in the forest, you encounter a magnificent creature – a silver-furred wolf with eyes that shine like captured starlight. This is no ordinary beast; this is one of the ancient Forest Guardians, protectors of the woodland's most sacred mysteries.

The Guardian speaks in a voice that resonates through your very soul: "Traveler, you seek passage through our domain. But first, you must prove your worth. The forest remembers all – every kindness, every cruelty, every moment of courage or cowardice."

Around you, the trees seem to lean in closer, their branches forming a natural amphitheater. Luminescent flowers begin to bloom along the path, casting an ethereal blue-green light that dances across the Guardian's silver coat. The air hums with ancient magic, and you feel the weight of centuries pressing down upon this sacred grove.

"Answer truthfully," the Guardian continues, "for the forest will know if you speak false words. What drives you to seek the heart of our domain? What do you hope to find in the depths where few mortals have ever ventured?" The question hangs in the air like morning mist, waiting for your response.`
  },
  3: {
    title: "The Crystal Caves",
    image: "photo-1492321936769-b49830bc1d1e",
    content: `Having passed the Guardian's test with your honest words, you're granted passage to the Crystal Caves – a wonder that few living souls have ever witnessed. As you descend through a natural archway of twisted roots, the world transforms around you into something from a dream.

The cavern walls are embedded with countless crystals that pulse with their own inner light, creating a symphony of colors that shift from deep amethyst to brilliant emerald to warm golden amber. Each crystal seems to hold captured starlight, and as you move through the space, they respond to your presence, growing brighter and more radiant.

A underground river flows through the center of the cavern, its waters so clear and still that they perfectly mirror the crystal ceiling above, creating the illusion that you're walking through infinite space among the stars themselves. The gentle sound of water droplets falling from stalactites creates a natural melody that echoes through the chambers.

Ancient inscriptions cover the walls – symbols and languages from civilizations lost to time. Some seem to glow as you approach, as if recognizing something within you. You realize that this place is not just beautiful; it's a repository of ancient wisdom, a library written in stone and crystal, waiting to share its secrets with those deemed worthy.`
  },
  4: {
    title: "The Moonlit Clearing",
    image: "photo-1470813740244-df37b8c1edcb",
    content: `Emerging from the crystal caves, you find yourself in a circular clearing bathed in the most beautiful moonlight you've ever experienced. The full moon hangs directly overhead, impossibly large and bright, casting silver shadows that dance with each gentle breeze that stirs the surrounding wildflowers.

In the center of the clearing stands an ancient stone circle – seven monoliths arranged in perfect harmony, each carved with intricate spirals and symbols that seem to move and shift in the moonlight. The stones hum with a low, resonant frequency that you feel in your bones, a sound that speaks of power that predates human memory.

Fireflies begin to emerge from the tall grass, not ordinary fireflies but creatures of pure light that leave trails of stardust in their wake. They spiral around the stone circle in complex patterns, creating temporary constellations that spell out messages in languages you somehow understand without ever having learned them.

As you step closer to the center of the circle, you feel a profound connection to something vast and ancient. The boundary between earth and sky seems to dissolve, and for a moment, you're part of something infinite. This is a place of transformation, where the ordinary world touches the realm of pure magic and possibility.`
  },
  5: {
    title: "The Heart of the Forest",
    image: "photo-1506744038136-46273834b3fb",
    content: `At last, you reach the legendary Heart of the Forest – a place that exists in the stories and songs of every culture, though few believed it was real. Before you stands the Great Tree, so massive that its trunk would take a hundred people holding hands to encircle, its crown lost in clouds that shimmer with rainbow light.

The Tree's bark is silver and gold, marked with patterns that tell the story of every creature that has ever lived in this forest. Its roots extend in all directions, connecting every plant, every animal, every drop of water in an intricate web of life that pulses with visible energy.

As you approach, you hear the Tree's voice – not with your ears, but with your heart. It speaks of the interconnectedness of all things, of the responsibility that comes with knowledge, and of the gift you've been given by completing this journey. The wisdom of ages flows through you, changing you at the deepest level.

The Great Tree offers you a choice: you may take a single seed from its branches, a seed that contains the potential for incredible growth and transformation. But once taken, you become a guardian yourself, responsible for protecting and nurturing the magic in your own corner of the world. The decision, and its consequences, will shape the rest of your journey through life.`
  }
};

const StoryPage: React.FC<StoryPageProps> = ({ pageNumber }) => {
  const story = storyContent[pageNumber as keyof typeof storyContent];

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <Card className="bg-white/5 backdrop-blur-lg border-white/10 overflow-hidden">
      <div 
        className="h-64 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(https://images.unsplash.com/${story.image}?auto=format&fit=crop&w=1000&q=80)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <CardHeader className="absolute bottom-0 left-0 right-0 text-white">
          <CardTitle className="text-2xl md:text-3xl font-bold drop-shadow-lg">
            {story.title}
          </CardTitle>
        </CardHeader>
      </div>
      <CardContent className="p-8">
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-white/90 leading-relaxed text-lg whitespace-pre-line">
            {story.content}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryPage;
