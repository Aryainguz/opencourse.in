"use client";
import { and, eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import { Chapters, CourseList } from "../../../../configs/Schema";
import ChapterContent from "./_components/ChapterContent";
import ChapterListCard from "./_components/ChapterListCard";

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { db } from "../../../../configs/db";

const CourseStart = ({ params }) => {
  const [course, setCourse] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState();
  const [chapterContent, setChapterContent] = useState([]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    params && GetCourse();
  }, [params]);
  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(eq(CourseList?.courseId, params?.courseId));
    console.log(result);
    const courseData = result[0];
    setCourse(courseData);

    // Auto-select and load first chapter
    const firstChapter = courseData?.courseOutput?.course?.chapters[0];
    if (firstChapter) {
      setSelectedChapter(firstChapter);
      // Use index 0 for the first chapter
      await GetSelectedChapterContent(0, courseData?.courseId);
    }
  };
  const GetSelectedChapterContent = async (chapterIndex, courseIdParam) => {
    const courseIdToUse = courseIdParam || course?.courseId;
    if (!courseIdToUse) return;

    const result = await db
      .select()
      .from(Chapters)
      .where(
        and(
          eq(Chapters?.chapterId, chapterIndex),
          eq(Chapters?.courseId, courseIdToUse)
        )
      );
    console.log("Chapter content result:", result);
    setChapterContent(result[0]);
  };
  return (
    <div>
      {/* Toggle button for sidebar on mobile */}
      <div className="md:hidden p-4">
        <button
          className="bg-primary text-white p-2 rounded-md"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <Cross1Icon className="w-6 h-6" />
          ) : (
            <HamburgerMenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>
      {/* chapters list sidebar */}
      <div
        className={`fixed md:w-64 w-64 h-screen bg-white border-r shadow-sm z-20 transform transition-transform md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:block`}
      >
        <h2 className="font-medium text-lg bg-primary p-3 text-white">
          {course?.courseOutput?.course?.name}
        </h2>

        <div className="h-[calc(100%-3rem)] overflow-y-auto">
          {course?.courseOutput?.course?.chapters.map((chapter, index) => (
            <div
              key={index}
              className={`cursor-pointer hover:bg-purple-50 ${
                selectedChapter?.name == chapter?.name && "bg-purple-100"
              }`}
              onClick={() => {
                setSelectedChapter(chapter);
                GetSelectedChapterContent(index);
              }}
            >
              <ChapterListCard chapter={chapter} index={index} />
            </div>
          ))}
        </div>
      </div>
      {/* content of each chapters  */}
      <div className="md:ml-64">
        <ChapterContent chapter={selectedChapter} content={chapterContent} />
      </div>
      {/* Overlay to close the sidebar when clicking outside on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default CourseStart;
