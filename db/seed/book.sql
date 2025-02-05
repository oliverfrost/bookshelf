INSERT INTO book (
    authorId,
    publisherId,
    title,
    description,
    ISBN,
    genres,
    language,
    yearOfPublication,
    coverImg
) VALUES (
    '123e4567-e89b-12d3-a456-426614174000', -- authorId (replace with valid UUID)
    '987fcdeb-51d3-12a4-b456-426614174000', -- publisherId (replace with valid UUID)
    'The Sample Book',
    'A fascinating story about...',
    '978-0-123456-78-9',
    ARRAY['Fantasy', 'Science Fiction']::genre[],
    'english'::language,
    2024,
    'https://example.com/book-cover.jpg'
);