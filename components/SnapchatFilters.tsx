"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Eye, Sparkles, ExternalLink, Ghost, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const snapchatFilters = [
  { id: "1", name: "low exposure sharp", views: "15B+", link: "https://www.snapchat.com/lens/f6476c9100404360912c2f50c76be9f6", codeImage: "https://app.snapchat.com/web/deeplink/snapcode?data=f6476c9100404360912c2f50c76be9f6&version=1&type=svg" },
  { id: "2", name: "MACBOOK BW x GRAIN", views: "17B+", link: "https://www.snapchat.com/lens/3e3089b84f244bd7a3a692103a4d490d", codeImage: "https://app.snapchat.com/web/deeplink/snapcode?data=3e3089b84f244bd7a3a692103a4d490d&version=1&type=svg" },
  { id: "3", name: "FILM CAM", views: "13B+", link: "https://www.snapchat.com/lens/8cb9093d0af94467beaf241fbd5f8deb", codeImage: "https://app.snapchat.com/web/deeplink/snapcode?data=8cb9093d0af94467beaf241fbd5f8deb&version=1&type=svg" },
  { id: "4", name: "MACBOOK BNW", views: "14B+", link: "https://www.snapchat.com/lens/738ca1236ade447f95287ee74e2f16ed", codeImage: "https://app.snapchat.com/web/deeplink/snapcode?data=738ca1236ade447f95287ee74e2f16ed&version=1&type=svg" },
  { id: "5", name: "Vintage BNW", views: "7B+", link: "https://www.snapchat.com/lens/f35c0c4968954be7bf3c0bf784876f45", codeImage: "https://app.snapchat.com/web/deeplink/snapcode?data=f35c0c4968954be7bf3c0bf784876f45&version=1&type=svg" },
  { id: "6", name: "pretty", views: "5B+", link: "https://www.snapchat.com/lens/7a4097cae92745dd89e28619ab23b688", codeImage: "https://app.snapchat.com/web/deeplink/snapcode?data=7a4097cae92745dd89e28619ab23b688&version=1&type=svg" },
  { id: "7", name: "DARK", views: "5B+", link: "https://www.snapchat.com/lens/e45121661d0e40dbac00adc71476f757", codeImage: "https://app.snapchat.com/web/deeplink/snapcode?data=e45121661d0e40dbac00adc71476f757&version=1&type=svg" },
  { id: "8", name: "Cupid Crown BW x G", views: "5B+", link: "https://www.snapchat.com/lens/052ebd1e4c3442688196bd4c4a5cb827", codeImage: "https://app.snapchat.com/web/deeplink/snapcode?data=052ebd1e4c3442688196bd4c4a5cb827&version=1&type=svg" },
  { id: "9", name: "achromatic", views: "4B+", link: "https://www.snapchat.com/lens/ab7c06e47fa24214b5a7cab13ed4310b", codeImage: "https://app.snapchat.com/web/deeplink/snapcode?data=ab7c06e47fa24214b5a7cab13ed4310b&version=1&type=svg" },
  { id: "10", name: "low exposure", views: "3B+", link: "https://www.snapchat.com/lens/7c6bd6a9ab784a769deff5e64b7ecd00", codeImage: "https://app.snapchat.com/web/deeplink/snapcode?data=7c6bd6a9ab784a769deff5e64b7ecd00&version=1&type=svg" },
  { id: "11", name: "Cupid Crown", views: "3B+", link: "https://www.snapchat.com/lens/51609f9a55fe43ddbf4bafff47ff9d1a", codeImage: "https://app.snapchat.com/web/deeplink/snapcode?data=51609f9a55fe43ddbf4bafff47ff9d1a&version=1&type=svg" },
  { id: "12", name: "Deep moody", views: "3B+", link: "https://www.snapchat.com/lens/865823d263b249119832aa7adf948b42", codeImage: "https://app.snapchat.com/web/deeplink/snapcode?data=865823d263b249119832aa7adf948b42&version=1&type=svg" },
  { id: "13", name: "Hearts Mood", views: "3B+", link: "https://www.snapchat.com/lens/e5e21255b0ae4e60805196a9840ea8cd", codeImage: "https://app.snapchat.com/web/deeplink/snapcode?data=e5e21255b0ae4e60805196a9840ea8cd&version=1&type=svg" },
  { id: "14", name: "BlossomBliss", views: "2B+", link: "https://www.snapchat.com/lens/c6c197f7c69d4cb5b4d96dc1256acd5d", codeImage: "https://app.snapchat.com/web/deeplink/snapcode?data=c6c197f7c69d4cb5b4d96dc1256acd5d&version=1&type=svg" },
  { id: "15", name: "Grainy BNW-2", views: "3B+", link: "https://www.snapchat.com/lens/e4a239547c704a38b79b3cff3eaa6cc9", codeImage: "https://app.snapchat.com/web/deeplink/snapcode?data=e4a239547c704a38b79b3cff3eaa6cc9&version=1&type=svg" },
  { id: "16", name: "BlossomBliss Grain", views: "2B+", link: "https://www.snapchat.com/lens/6725ccfebde24b3e8b54b6f4691788af", codeImage: "https://app.snapchat.com/web/deeplink/snapcode?data=6725ccfebde24b3e8b54b6f4691788af&version=1&type=svg" },
  { id: "17", name: "Album BNW", views: "2B+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=a7dea132d23b4c5c9dc72788fdd9dc53&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/8fa3c60e-8909-36b4-8863-e00e159c2446_320_3d2393da-2554-4a9d-b812-59b1d60bfc03.png" },
  { id: "18", name: "natural", views: "1B+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=255c7597286447cb8773c5668b1cac5a&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/b755e613-c4b2-3f59-b280-fde6b20eca5e_320_e9d5aeff-9ef3-4d90-98eb-1945ae57cbfc.png" },
  { id: "19", name: "Grainy BNW", views: "2B+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=fd7f029cb0064d88b73189f7b96837a9&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/7401f897-7aa6-3ccf-a941-4cf9a74a17ce_320_89fb184c-dbdd-4d9e-8cc1-dbe38ce87d1a.png" },
  { id: "20", name: "MACBOOK EFFECT", views: "2B+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=8759a8433a15431ab0bc8e01a7a76942&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/4af08aa8-0007-331f-829b-c080bfcd84f7_320_cb4fd0db-ee40-4450-9e28-ca184ab63279.png" },
  { id: "21", name: "Cross BNW", views: "2B+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=452fc5100a7d442c84465048c35d098d&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/9fd585a9-3405-3930-8b8c-ad7e089c2631_320_fd77a151-8cb5-4fc5-80d7-4d26804b0b11.png" },
  { id: "22", name: "Days Of The Week", views: "2B+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=2fa8db46bd78480a981b459b666e6303&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/87b25931-7b74-3175-8e96-68fea2711f04_320_4db2d92f-0b58-40f0-8f56-8569b55c29e6.png" },
  { id: "23", name: "Cupid Crown BNW", views: "2B+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=599050da09bd4fa2862d546a4a12053a&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/a963296a-6226-3352-8721-57cf3cd9a249_320_fa02c3b4-414b-4542-a7b2-87da298714a7.png" },
  { id: "24", name: "BEAR BLISS x GRAIN", views: "3B+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=cf7b2e6888e8491882166f9b869b8d44&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/0d04dec7-2cee-363e-9e49-6f726764a66d_320_9ae94d99-3476-4040-88a9-98a8010bc029.png" },
  { id: "25", name: "M00DY", views: "3B+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7752170cc7914ad49fb23cbaf2bb48f7&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/a9f40a8a-f909-31f0-9b60-57bed730baca_320_cbf61959-d849-4e03-b509-add173eb683f.png" },
  { id: "26", name: "VINTAGE", views: "900M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=78b6463522784c788df69af5b2f49599&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/8ed2035c-5a0e-3020-9d6e-a0a1d4f19bba_320_c8c9908b-60c6-44ba-9b79-b8192911fa82.png" },
  { id: "27", name: "Aesthetic day", views: "700M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=fc3aa25c44314298b596d3b63b2b00f1&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/10210439-4bc7-3b6d-a439-c445a0f99120_320_78b9a355-09ea-43eb-8619-05cf613c298e.png" },
  { id: "28", name: "Avril", views: "700M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=b428b183f43643e3b1d23f14409ec52c&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/33896853-a5a4-3f24-9aaf-dc6a3aa3f1ea_320_1f3c8ca0-2c9d-4987-84a3-a4858b2d1908.png" },
  { id: "29", name: "70s Aesthetic", views: "800M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=d528500d0f914323a0823bfcf4799377&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/7c5168d6-b79a-3979-9ae8-b923123a4396_320_f9deda53-0f4b-4918-80fb-b0aef001257d.png" },
  { id: "30", name: "Bella", views: "500M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e1e05e070c294b4e8f00f2677aa38d46&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/bcac6e85-c893-35b6-a25b-4976e3610624_320_2fd61ec3-e0b1-4a9b-900c-ff6b6026a7ae.png" },
  { id: "31", name: "Arch BNW", views: "600M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e080f723b6014e1c9941a86705e07970&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/f45ccc5e-693b-36c3-94f5-488961bb9687_320_b28d9d5c-2392-4401-b58e-073ccbeb2878.png" },
  { id: "32", name: "snapshot", views: "600M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f317dac77ad54627996f09adcd144746&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/544d8c75-31b5-39e2-adb2-c1df4d1fdd3e_320_775384f8-624f-45af-95c8-45cb10d73f27.png" },
  { id: "33", name: "Aloha", views: "600M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f98615580a9b4a96a71063387e97624b&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/257666fb-3c81-3bf2-9f2c-4b49d37b6b46_320_49200826-fca3-4792-9f14-37a8b07b35dc.png" },
  { id: "34", name: "Ivy", views: "500M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=94c4946752884e328a8c8e9f1c2d35dc&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/e2f948ce-734b-371a-870f-0a192e96754e_320_eef2c510-759c-4e18-9e13-5fb3b7f49239.png" },
  { id: "35", name: "Morana", views: "500M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=1e2e129c6899472889818376fe7f1ef9&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/8e0e728a-323a-3646-b63f-5cc4732d8cb1_320_cf7daa38-9b9e-44f6-b3d3-3a52ea6264ea.png" },
  { id: "36", name: "Arch sharp", views: "400M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=679ffbe93a1c491d97d0b5ce4bdf186d&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/565a6145-6f91-3a79-86cb-6a12adfd4b81_320_7cfb3fad-f43e-4754-8a51-f402496b9f63.png" },
  { id: "37", name: "Moment in Time", views: "400M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=72fb1cc43e8d41da87eb3c497e0cd80d&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/b359ac69-3714-300d-9c01-8072defdf3ba_320_16406347-c36b-4538-a028-1e52fa8a9ed6.png" },
  { id: "38", name: "Arch dark", views: "400M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=dcf884ae83de4fbeaa4163ebcadf4c5c&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/7ebc7b24-8d8a-3cde-813e-e411ca42e046_320_5c7e81c4-803d-4274-9766-f8df06d01f47.png" },
  { id: "39", name: "Galatea", views: "400M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=c80f57653cf44dcebe310014656e937c&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/22aa90c3-0abb-39b6-bf38-f5c67d514414_320_5471aaba-3617-4798-b701-8783eea4e8db.png" },
  { id: "40", name: "Travis Scott", views: "300M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=8b3407496ee44670b7cd09029b93fa71&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/63c43ffb-6560-3b4d-9ea5-f4f38d96018e_320_bd3a6590-deab-48e7-81e9-a74c4eaf498f.png" },
  { id: "41", name: "vivid", views: "300M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=122482f6280c4d9fbdf1cd05ef9cbd14&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/12bbcecf-b6ba-33eb-b8ba-4a0958a67ca0_320_47ae8e8c-2306-481b-8499-551cd4e4fca8.png" },
  { id: "42", name: "Halcyon", views: "300M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=5091ee5e271d433bba4e8b507320d3b5&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/b8858a91-4a8e-3606-b47c-988ff637ab8b_320_583815e4-a6d9-441c-b2fa-6720b79c0681.png" },
  { id: "43", name: "Bear Bliss", views: "300M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=4ae2015aa2124abc9bd0de0487a2645f&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/f3cf7ebc-7b4b-39ad-b590-9edf22deb77f_320_9403ea44-1029-436d-a1f4-66d64140048b.png" },
  { id: "44", name: "espresso", views: "200M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=aeea456d4c214543ad114bfbbb939965&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/5c07900f-0057-30f9-a12d-1ac889d69b93_320_60a29392-e6d1-41eb-a143-3eb4007685d3.png" },
  { id: "45", name: "TIME", views: "200M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=35af50eb034e4b0291cc20247ccf40fa&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/be0be1a7-cab1-344f-8d72-19307b343a39_320_b44d3e39-7e97-4e02-9bb6-b373a9e39336.png" },
  { id: "46", name: "Aphrodite Sharp", views: "200M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7adcd126048c4fe5ac2519b2d6874032&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/9a740fb3-0390-3513-8264-1ee6b39fa361_320_69ec0d3c-713b-4965-bdbf-851bddbc8c55.png" },
  { id: "47", name: "Polaroid-3", views: "100M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f96ec8b95061478ea7545fdfe45e7b83&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/7630ccd9-b788-37b1-a33f-47ee8f980e8e_320_53a1d4ed-3a54-4b24-9c69-9a3d565f2242.png" },
  { id: "48", name: "Aesthetic crown V2", views: "300M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=766f9afd452849f9ad8d8a61aaba76aa&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/117241d1-8482-3226-87b6-8d97d05fb640_320_59aa4b9c-164e-4acc-910a-52acd51694a3.png" },
  { id: "49", name: "Butterfly Kiss", views: "300M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=0802837f1b604525adeaf86433838d54&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/16e7deae-f8d0-3117-bd70-a9860e3b4abe_320_6e6e1f24-bf6b-470c-be8e-7e601021d275.png" },
  { id: "50", name: "FILM CAM x MOCHA", views: "200M+", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=abbcf62da0f543bbaefdca897bb34302&metadata=01", codeImage: "https://snapcodes.storage.googleapis.com/png/4029e868-6ac2-38d6-88e4-c505ced9fecf_320_86c81e0d-facd-4708-8fcd-20276a956035.png" },
];

export function SnapchatSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Set to exactly 6
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Pagination Logic
  const totalPages = Math.ceil(snapchatFilters.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentFilters = snapchatFilters.slice(startIndex, startIndex + itemsPerPage);

  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <section id="snapchat" ref={ref} className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.2em] uppercase text-primary mb-4 text-yellow-500 font-bold">
            AR Portfolio
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Snapchat Lens Gallery
          </p>
        </motion.div>

        {/* Paginated Grid */}
        <div className="min-h-[800px]"> {/* Prevents layout shift when switching pages */}
          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            <AnimatePresence mode="popLayout">
              {currentFilters.map((filter) => (
                <motion.div
                  key={filter.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group p-5 rounded-3xl bg-card border border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                  <div className="relative aspect-square mb-4 rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center p-6">
                    <img 
                      src={filter.codeImage} 
                      alt={filter.name} 
                      className="w-full h-full object-contain" 
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white text-xs font-semibold border border-white/20 px-4 py-2 rounded-full backdrop-blur-md">
                        Scan Snapcode
                      </p>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-1 truncate">{filter.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Eye className="w-4 h-4 text-primary" />
                    <span>{filter.views} views</span>
                  </div>

                  <Button variant="outline" className="w-full rounded-xl group/btn" asChild>
                    <Link href={filter.link} target="_blank">
                      Try Now <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <Button
            variant="ghost"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="rounded-full h-12 w-12 p-0"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentPage === page ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="rounded-full h-12 w-12 p-0"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Global Stats Footer */}
        <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10" asChild>
            <Link href="https://www.snapchat.com/add/saketh05" target="_blank">
              <Ghost className="w-5 h-5 mr-2" /> Follow on Snapchat
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}