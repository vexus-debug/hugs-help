
-- Add unique constraint on page_key for upsert to work
ALTER TABLE public.site_content ADD CONSTRAINT site_content_page_key_unique UNIQUE (page_key);

-- Add WITH CHECK to UPDATE policies
DROP POLICY IF EXISTS "Admin can update site content" ON public.site_content;
CREATE POLICY "Admin can update site content" ON public.site_content
FOR UPDATE TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

DROP POLICY IF EXISTS "Admin can update gallery" ON public.gallery_images;
CREATE POLICY "Admin can update gallery" ON public.gallery_images
FOR UPDATE TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

DROP POLICY IF EXISTS "Admin can update reviews" ON public.reviews;
CREATE POLICY "Admin can update reviews" ON public.reviews
FOR UPDATE TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
