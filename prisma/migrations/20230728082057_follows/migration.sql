-- CreateTable
CREATE TABLE "_followe" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_followe_AB_unique" ON "_followe"("A", "B");

-- CreateIndex
CREATE INDEX "_followe_B_index" ON "_followe"("B");

-- AddForeignKey
ALTER TABLE "_followe" ADD CONSTRAINT "_followe_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_followe" ADD CONSTRAINT "_followe_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
