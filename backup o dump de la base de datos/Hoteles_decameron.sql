PGDMP  0    -                |            Hoteles_decameron    17.2    17.2 D    O           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            P           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            Q           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            R           1262    16387    Hoteles_decameron    DATABASE     �   CREATE DATABASE "Hoteles_decameron" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
 #   DROP DATABASE "Hoteles_decameron";
                     postgres    false            �            1259    16627    cache    TABLE     �   CREATE TABLE public.cache (
    key character varying(255) NOT NULL,
    value text NOT NULL,
    expiration integer NOT NULL
);
    DROP TABLE public.cache;
       public         heap r       postgres    false            �            1259    16634    cache_locks    TABLE     �   CREATE TABLE public.cache_locks (
    key character varying(255) NOT NULL,
    owner character varying(255) NOT NULL,
    expiration integer NOT NULL
);
    DROP TABLE public.cache_locks;
       public         heap r       postgres    false            �            1259    16659    failed_jobs    TABLE     &  CREATE TABLE public.failed_jobs (
    id bigint NOT NULL,
    uuid character varying(255) NOT NULL,
    connection text NOT NULL,
    queue text NOT NULL,
    payload text NOT NULL,
    exception text NOT NULL,
    failed_at timestamp(0) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public.failed_jobs;
       public         heap r       postgres    false            �            1259    16658    failed_jobs_id_seq    SEQUENCE     {   CREATE SEQUENCE public.failed_jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.failed_jobs_id_seq;
       public               postgres    false    229            S           0    0    failed_jobs_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.failed_jobs_id_seq OWNED BY public.failed_jobs.id;
          public               postgres    false    228            �            1259    16671    hoteles    TABLE     p  CREATE TABLE public.hoteles (
    id bigint NOT NULL,
    nombre character varying(255) NOT NULL,
    ciudad character varying(255) NOT NULL,
    numero_habitaciones integer NOT NULL,
    direccion character varying(255) NOT NULL,
    nit character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
    DROP TABLE public.hoteles;
       public         heap r       postgres    false            �            1259    16670    hoteles_id_seq    SEQUENCE     w   CREATE SEQUENCE public.hoteles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.hoteles_id_seq;
       public               postgres    false    231            T           0    0    hoteles_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.hoteles_id_seq OWNED BY public.hoteles.id;
          public               postgres    false    230            �            1259    16651    job_batches    TABLE     d  CREATE TABLE public.job_batches (
    id character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    total_jobs integer NOT NULL,
    pending_jobs integer NOT NULL,
    failed_jobs integer NOT NULL,
    failed_job_ids text NOT NULL,
    options text,
    cancelled_at integer,
    created_at integer NOT NULL,
    finished_at integer
);
    DROP TABLE public.job_batches;
       public         heap r       postgres    false            �            1259    16642    jobs    TABLE     �   CREATE TABLE public.jobs (
    id bigint NOT NULL,
    queue character varying(255) NOT NULL,
    payload text NOT NULL,
    attempts smallint NOT NULL,
    reserved_at integer,
    available_at integer NOT NULL,
    created_at integer NOT NULL
);
    DROP TABLE public.jobs;
       public         heap r       postgres    false            �            1259    16641    jobs_id_seq    SEQUENCE     t   CREATE SEQUENCE public.jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.jobs_id_seq;
       public               postgres    false    226            U           0    0    jobs_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.jobs_id_seq OWNED BY public.jobs.id;
          public               postgres    false    225            �            1259    16594 
   migrations    TABLE     �   CREATE TABLE public.migrations (
    id integer NOT NULL,
    migration character varying(255) NOT NULL,
    batch integer NOT NULL
);
    DROP TABLE public.migrations;
       public         heap r       postgres    false            �            1259    16593    migrations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.migrations_id_seq;
       public               postgres    false    218            V           0    0    migrations_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;
          public               postgres    false    217            �            1259    16611    password_reset_tokens    TABLE     �   CREATE TABLE public.password_reset_tokens (
    email character varying(255) NOT NULL,
    token character varying(255) NOT NULL,
    created_at timestamp(0) without time zone
);
 )   DROP TABLE public.password_reset_tokens;
       public         heap r       postgres    false            �            1259    16618    sessions    TABLE     �   CREATE TABLE public.sessions (
    id character varying(255) NOT NULL,
    user_id bigint,
    ip_address character varying(45),
    user_agent text,
    payload text NOT NULL,
    last_activity integer NOT NULL
);
    DROP TABLE public.sessions;
       public         heap r       postgres    false            �            1259    16682    tipos_habitacion    TABLE     B  CREATE TABLE public.tipos_habitacion (
    id bigint NOT NULL,
    hotel_id bigint NOT NULL,
    cantidad integer NOT NULL,
    tipo_habitacion character varying(255) NOT NULL,
    acomodacion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
 $   DROP TABLE public.tipos_habitacion;
       public         heap r       postgres    false            �            1259    16681    tipos_habitacion_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tipos_habitacion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.tipos_habitacion_id_seq;
       public               postgres    false    233            W           0    0    tipos_habitacion_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.tipos_habitacion_id_seq OWNED BY public.tipos_habitacion.id;
          public               postgres    false    232            �            1259    16601    users    TABLE     x  CREATE TABLE public.users (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    email_verified_at timestamp(0) without time zone,
    password character varying(255) NOT NULL,
    remember_token character varying(100),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
    DROP TABLE public.users;
       public         heap r       postgres    false            �            1259    16600    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public               postgres    false    220            X           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public               postgres    false    219            �           2604    16662    failed_jobs id    DEFAULT     p   ALTER TABLE ONLY public.failed_jobs ALTER COLUMN id SET DEFAULT nextval('public.failed_jobs_id_seq'::regclass);
 =   ALTER TABLE public.failed_jobs ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    228    229    229            �           2604    16674 
   hoteles id    DEFAULT     h   ALTER TABLE ONLY public.hoteles ALTER COLUMN id SET DEFAULT nextval('public.hoteles_id_seq'::regclass);
 9   ALTER TABLE public.hoteles ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    230    231    231            �           2604    16645    jobs id    DEFAULT     b   ALTER TABLE ONLY public.jobs ALTER COLUMN id SET DEFAULT nextval('public.jobs_id_seq'::regclass);
 6   ALTER TABLE public.jobs ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    225    226    226            �           2604    16597    migrations id    DEFAULT     n   ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);
 <   ALTER TABLE public.migrations ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    217    218            �           2604    16685    tipos_habitacion id    DEFAULT     z   ALTER TABLE ONLY public.tipos_habitacion ALTER COLUMN id SET DEFAULT nextval('public.tipos_habitacion_id_seq'::regclass);
 B   ALTER TABLE public.tipos_habitacion ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    233    232    233            �           2604    16604    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    220    219    220            B          0    16627    cache 
   TABLE DATA           7   COPY public.cache (key, value, expiration) FROM stdin;
    public               postgres    false    223   /P       C          0    16634    cache_locks 
   TABLE DATA           =   COPY public.cache_locks (key, owner, expiration) FROM stdin;
    public               postgres    false    224   LP       H          0    16659    failed_jobs 
   TABLE DATA           a   COPY public.failed_jobs (id, uuid, connection, queue, payload, exception, failed_at) FROM stdin;
    public               postgres    false    229   iP       J          0    16671    hoteles 
   TABLE DATA           r   COPY public.hoteles (id, nombre, ciudad, numero_habitaciones, direccion, nit, created_at, updated_at) FROM stdin;
    public               postgres    false    231   �P       F          0    16651    job_batches 
   TABLE DATA           �   COPY public.job_batches (id, name, total_jobs, pending_jobs, failed_jobs, failed_job_ids, options, cancelled_at, created_at, finished_at) FROM stdin;
    public               postgres    false    227   eQ       E          0    16642    jobs 
   TABLE DATA           c   COPY public.jobs (id, queue, payload, attempts, reserved_at, available_at, created_at) FROM stdin;
    public               postgres    false    226   �Q       =          0    16594 
   migrations 
   TABLE DATA           :   COPY public.migrations (id, migration, batch) FROM stdin;
    public               postgres    false    218   �Q       @          0    16611    password_reset_tokens 
   TABLE DATA           I   COPY public.password_reset_tokens (email, token, created_at) FROM stdin;
    public               postgres    false    221   !R       A          0    16618    sessions 
   TABLE DATA           _   COPY public.sessions (id, user_id, ip_address, user_agent, payload, last_activity) FROM stdin;
    public               postgres    false    222   >R       L          0    16682    tipos_habitacion 
   TABLE DATA           x   COPY public.tipos_habitacion (id, hotel_id, cantidad, tipo_habitacion, acomodacion, created_at, updated_at) FROM stdin;
    public               postgres    false    233   [R       ?          0    16601    users 
   TABLE DATA           u   COPY public.users (id, name, email, email_verified_at, password, remember_token, created_at, updated_at) FROM stdin;
    public               postgres    false    220   �R       Y           0    0    failed_jobs_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.failed_jobs_id_seq', 1, false);
          public               postgres    false    228            Z           0    0    hoteles_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.hoteles_id_seq', 7, true);
          public               postgres    false    230            [           0    0    jobs_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.jobs_id_seq', 1, false);
          public               postgres    false    225            \           0    0    migrations_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.migrations_id_seq', 5, true);
          public               postgres    false    217            ]           0    0    tipos_habitacion_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.tipos_habitacion_id_seq', 1, true);
          public               postgres    false    232            ^           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 1, false);
          public               postgres    false    219            �           2606    16640    cache_locks cache_locks_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.cache_locks
    ADD CONSTRAINT cache_locks_pkey PRIMARY KEY (key);
 F   ALTER TABLE ONLY public.cache_locks DROP CONSTRAINT cache_locks_pkey;
       public                 postgres    false    224            �           2606    16633    cache cache_pkey 
   CONSTRAINT     O   ALTER TABLE ONLY public.cache
    ADD CONSTRAINT cache_pkey PRIMARY KEY (key);
 :   ALTER TABLE ONLY public.cache DROP CONSTRAINT cache_pkey;
       public                 postgres    false    223            �           2606    16667    failed_jobs failed_jobs_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.failed_jobs
    ADD CONSTRAINT failed_jobs_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.failed_jobs DROP CONSTRAINT failed_jobs_pkey;
       public                 postgres    false    229            �           2606    16669 #   failed_jobs failed_jobs_uuid_unique 
   CONSTRAINT     ^   ALTER TABLE ONLY public.failed_jobs
    ADD CONSTRAINT failed_jobs_uuid_unique UNIQUE (uuid);
 M   ALTER TABLE ONLY public.failed_jobs DROP CONSTRAINT failed_jobs_uuid_unique;
       public                 postgres    false    229            �           2606    16680    hoteles hoteles_nit_unique 
   CONSTRAINT     T   ALTER TABLE ONLY public.hoteles
    ADD CONSTRAINT hoteles_nit_unique UNIQUE (nit);
 D   ALTER TABLE ONLY public.hoteles DROP CONSTRAINT hoteles_nit_unique;
       public                 postgres    false    231            �           2606    16678    hoteles hoteles_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.hoteles
    ADD CONSTRAINT hoteles_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.hoteles DROP CONSTRAINT hoteles_pkey;
       public                 postgres    false    231            �           2606    16657    job_batches job_batches_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.job_batches
    ADD CONSTRAINT job_batches_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.job_batches DROP CONSTRAINT job_batches_pkey;
       public                 postgres    false    227            �           2606    16649    jobs jobs_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.jobs DROP CONSTRAINT jobs_pkey;
       public                 postgres    false    226            �           2606    16599    migrations migrations_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.migrations DROP CONSTRAINT migrations_pkey;
       public                 postgres    false    218            �           2606    16617 0   password_reset_tokens password_reset_tokens_pkey 
   CONSTRAINT     q   ALTER TABLE ONLY public.password_reset_tokens
    ADD CONSTRAINT password_reset_tokens_pkey PRIMARY KEY (email);
 Z   ALTER TABLE ONLY public.password_reset_tokens DROP CONSTRAINT password_reset_tokens_pkey;
       public                 postgres    false    221            �           2606    16624    sessions sessions_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_pkey;
       public                 postgres    false    222            �           2606    16689 &   tipos_habitacion tipos_habitacion_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.tipos_habitacion
    ADD CONSTRAINT tipos_habitacion_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.tipos_habitacion DROP CONSTRAINT tipos_habitacion_pkey;
       public                 postgres    false    233            �           2606    16610    users users_email_unique 
   CONSTRAINT     T   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_unique;
       public                 postgres    false    220            �           2606    16608    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public                 postgres    false    220            �           1259    16650    jobs_queue_index    INDEX     B   CREATE INDEX jobs_queue_index ON public.jobs USING btree (queue);
 $   DROP INDEX public.jobs_queue_index;
       public                 postgres    false    226            �           1259    16626    sessions_last_activity_index    INDEX     Z   CREATE INDEX sessions_last_activity_index ON public.sessions USING btree (last_activity);
 0   DROP INDEX public.sessions_last_activity_index;
       public                 postgres    false    222            �           1259    16625    sessions_user_id_index    INDEX     N   CREATE INDEX sessions_user_id_index ON public.sessions USING btree (user_id);
 *   DROP INDEX public.sessions_user_id_index;
       public                 postgres    false    222            �           2606    16690 2   tipos_habitacion tipos_habitacion_hotel_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.tipos_habitacion
    ADD CONSTRAINT tipos_habitacion_hotel_id_foreign FOREIGN KEY (hotel_id) REFERENCES public.hoteles(id) ON DELETE CASCADE;
 \   ALTER TABLE ONLY public.tipos_habitacion DROP CONSTRAINT tipos_habitacion_hotel_id_foreign;
       public               postgres    false    233    4775    231            B      x������ � �      C      x������ � �      H      x������ � �      J   �   x�m�1n�0@љ:�.�@�(��x��c�� @�����,�X�H��#��H"��9f=�27�0�ﳜ�3�d�(9G=�T>�eɃ1�D����8�Cp]���m{�ck��,�S����_o`��t�m�@�#"���p�>�k�o�W-r�cK��[���;|u��{Mu�;I�t]�E��n���z�>A? w�	���o���8*�n��`�      F      x������ � �      E      x������ � �      =   r   x�e��
�0���cF��3���@+����2Ԃ^�r�� ���ᴨ�����$��������'n�8���#��H�i�g��t�N�}me�V��q�XLR������ޯ�vA�      @      x������ � �      A      x������ � �      L   9   x�3�4�42�t-.9�0/%���%?)'(dd�kh�k`�`hiejnel�M�+F��� M+:      ?      x������ � �     